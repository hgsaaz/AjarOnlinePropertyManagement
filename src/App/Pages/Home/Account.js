import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { Redirect } from 'react-router-dom';
import ShowPropertyCard from '../../components/ShowPropertyCard';

class Account extends React.Component {

    constructor(props, context) {
        super(props, context);
        this._isMounted = false;
        this.state = {
            loading: true,
            records: null
        }

        this.props.firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ currentUser: user });
            } else {
            }
        });
    }

    componentDidMount() {
        this._isMounted = true;
        this.props.firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ currentUser: user });
                this.props.firebase.isAdmin()
                    .then((snapshot) => {
                        let adminList = snapshot.val();
                        if (adminList != null) {
                            let admins = Object.keys(adminList).map((key) => {
                                return adminList[key].email === user.email;
                            });

                            let isAdmin = false;

                            admins.forEach((val) => {
                                if (val === true) {
                                    isAdmin = true;
                                }
                            });
                            this.setState({ isAdmin: isAdmin });
                            if (isAdmin) {
                                this.fetchAllProperties();
                            } else {
                                this.fetchPropertiesForUser(user);
                            }
                        }
                    });

            } else {
                this.setState({ loading: false });
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    /**
     *fetching properties from firebase DB
     *props : none
     * @memberof Account
     */
    fetchAllProperties = () => {
        this.props.firebase.getPropertyRef()
            .once('value').then((snapshot) => {

                let propertyObject = snapshot.val();
                let propertyList = null;
                if (propertyObject != null) {
                    propertyList = Object.keys(propertyObject).map((key) => {
                        return [key, propertyObject[key]];
                    });
                    this.setState({ records: propertyList });
                }
                this.setState({ loading: false });
            });
    }

    /**
     *fetching properties from firebase DB specific to user
     *props : user object
     * @memberof Account
     */
    fetchPropertiesForUser = (user) => {
        this.props.firebase.getPropertyRef()
            .orderByChild('property_user')
            .equalTo(user.email)
            .once('value').then((snapshot) => {
                let propertyObject = snapshot.val();
                let propertyList = null;
                if (propertyObject != null) {
                    propertyList = Object.keys(propertyObject).map((key) => {
                        return [key, propertyObject[key]];
                    });
                    this.setState({ records: propertyList });
                }
                this.setState({ loading: false });
            });
    }

    render() {

        const { loading, currentUser, records } = this.state;
        return (
            <div>
                {
                    loading ?
                        <span className="loading">
                            <Loader
                                className="loadingImg"
                                type="Ball-Triangle"
                                color="#20639B"
                                height="100%"
                                width={50}
                            />
                        </span>
                        :
                        <div>
                            {
                                currentUser == null ?
                                    <Redirect to='/home' /> :
                                    <div>
                                        <Container className="p-3">
                                            <Row>
                                                <Col><h3 className="pb-3">User Details</h3></Col>
                                            </Row>
                                            <Row>
                                                <Col>Name : {currentUser.displayName}</Col>
                                                <Col>Name : {currentUser.email}</Col>
                                            </Row>
                                            <Row>

                                            </Row>
                                        </Container>

                                        <div className="pt-5">
                                            {

                                                <Container>
                                                    <Row>
                                                        <Col><h2 className="pb-3">Property Ads by you</h2></Col>
                                                    </Row>
                                                    {
                                                        records != null ? <div>{
                                                            records.map((property) => {
                                                                return (
                                                                    <ShowPropertyCard forAdmin={false} property={property[1]} key={property[0]} />
                                                                )
                                                            })
                                                        }</div> : <div><p className="p-3">No properties posted by you</p></div>
                                                    }
                                                </Container>
                                            }
                                        </div>

                                    </div>
                            }
                        </div>
                }
            </div>
        );
    }
}

export default Account;
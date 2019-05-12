import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import ShowPropertyCard from '../../components/ShowPropertyCard';
import { Redirect } from 'react-router-dom';

class Admin extends React.Component {

    constructor(props, context) {
        super(props, context);
        this._isMounted = false;
        this.state = {
            loading: true,
            records: null,
            isAdmin: false,
            currentUser: null
        }
    }

    componentDidMount() {
        this._isMounted = true;
        this.props.firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
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
                                this.fetchUnverifiedProperties();
                            } else {
                                this.setState({
                                    loading: false
                                });
                            }
                        }
                    });

            } else {
                this.setState({
                    loading: false
                });
            }
        });


    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    /**
     *fetching all properties which are not verified
     *props : none
     * @memberof Admin
     */
    fetchUnverifiedProperties = () => {
        this.props.firebase.getPropertyRef()
            .orderByChild('property_verified')
            .equalTo(false)
            .once('value').then((snapshot) => {
                let propertyObject = snapshot.val();

                const propertyList = Object.keys(propertyObject).map((key) => {
                    return [key, propertyObject[key]];
                });

                this.setState({
                    loading: false,
                    records: propertyList
                });
            });
    }

    render() {
        const { loading, isAdmin, records, currentUser } = this.state;
        return (
            <div>

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
                            <div>{currentUser === null ? <Redirect to="/home" /> :
                                <div>
                                    {
                                        isAdmin === false ?
                                            <Container>
                                                <Row>
                                                    <Col className="text-center"><h2>401:Unauthorize Access</h2></Col>
                                                </Row>
                                            </Container> :
                                            <Container>
                                                <Row>
                                                    <Col><h2>Property List</h2></Col>
                                                </Row>
                                                {
                                                    records != null && <div>{
                                                        records.map((property) => {
                                                            return (
                                                                <ShowPropertyCard forAdmin={true} property={property[1]} key={property[0]} />
                                                            )
                                                        })
                                                    }</div>
                                                }
                                            </Container>
                                    }
                                </div>
                            }
                            </div>
                    }
                </div>

            </div>
        );
    }
}

export default Admin;
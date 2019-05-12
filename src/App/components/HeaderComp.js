import React from 'react';
import nav_logo from '../img/navbar-logo.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import PostModal from './PostModal';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import LoginModal from './LoginModal';

class HeaderComp extends React.Component {

    constructor(props, context) {
        super(props, context);

        this._isMounted = false;
        this.state = {
            admin_users: [],
            show: false,
            loginShow: false,
            currentUser: null,
            showHeaderLoading: true,
        };

        this.props.firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    currentUser: user,
                    showHeaderLoading: false
                });

            } else {
                this.setState({ showHeaderLoading: false });
            }
        });
    }


    componentDidMount() {
        this._isMounted = true;
        this.props.firebase.isAdmin()
            .then((snapshot) => {
                this.setState({ admin_users: snapshot.val() });
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        if (this.state.currentUser === null) {
            this.setState({ loginShow: true });
        } else {
            this.setState({ show: true });
        }
    }

    handleLoginClose = () => {
        this.setState({ loginShow: false });
    }

    handleLoginShow = () => {
        this.setState({ loginShow: true });
    }

    isAdminUser = (user) => {
        let init = this.state.admin_users;
        if (init != null) {
            let admins = Object.keys(init).map(function (key) {
                return init[key].email === user;
            });

            let isAdmin = false;

            admins.forEach((val) => {
                if (val === true) {
                    isAdmin = true;
                }
            });
            return isAdmin;
        }
        return false;
    }

    /**
     *Sign out user from firebase
     *props : none
     * @memberof HeaderComp
     */
    signOut = () => {
        this.props.firebase.doSignOut()
            .then(() => {
                this.setState({ currentUser: null });
                window.location.reload();
            }).catch((error) => {
            });
    }

    render() {

        const { showHeaderLoading, currentUser, show, loginShow } = this.state;
        const { firebase } = this.props;

        return (
            <div>
                <Navbar className="nav-header" expand="lg">
                    <Navbar.Brand><Link to="/home"><img src={nav_logo} alt="logo" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                        {showHeaderLoading && <Loader
                            className="loadingImg"
                            type="Ball-Triangle"
                            color="#20639B"
                            height="100%"
                            width={50}
                        />}

                        {showHeaderLoading === false && <Nav>
                            {currentUser == null && <Navbar.Text><Link to="/register"><span className="black-color">REGISTER</span></Link></Navbar.Text>}
                            {currentUser == null ? <Nav.Link onClick={this.handleLoginShow}><span className="black-color">LOG IN</span></Nav.Link> :
                                <NavDropdown title={currentUser.displayName} id="basic-nav-dropdown">
                                    <NavDropdown.Item as="span"><Link to="/account"><span className="black-color">Account</span></Link></NavDropdown.Item>
                                    <NavDropdown.Item onClick={this.signOut}>Log out</NavDropdown.Item>
                                    {this.isAdminUser(currentUser.email) &&
                                        <div>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item as="span"><Link to={{
                                                pathname: "/admin",
                                                state: {
                                                    isAuthenticated: true
                                                }
                                            }}><span className="black-color">Admin Section</span></Link></NavDropdown.Item>
                                        </div>
                                    }
                                </NavDropdown>
                            }
                            <Nav.Link onClick={this.handleShow} style={{ color: "#FFF" }} className="postBtn">
                                <i className="fa fa-plus-circle"></i>
                                &nbsp;POST AD</Nav.Link>
                        </Nav>
                        }
                    </Navbar.Collapse>

                </Navbar>

                <PostModal
                    firebase={firebase}
                    show={show}
                    onHide={this.handleClose}
                />

                <LoginModal
                    firebase={firebase}
                    show={loginShow}
                    onHide={this.handleLoginClose}
                />
            </div>
        );
    }
}

export default HeaderComp;
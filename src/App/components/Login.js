import React from 'react';
import { Row, Col, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { GOOGLE_SIGN_IN_LABEL, FACEBOOK_SIGN_IN_LABEL, LOGIN_LABEL } from '../helper/constants';
import Loader from 'react-loader-spinner';
import {
    withToastManager,
} from 'react-toast-notifications';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loading: false,
            showError: false,
            errMsg: ''
        };

    }

    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    handleModalHide = () => {
        this.props.hide();
    }


    /**
     *sign in function
     *props : email, password
     * @memberof Login
     */
    handleSignInUser = () => {
        const { toastManager } = this.props;
        this.setState({ showError: false, errMsg: '' });
        const { firebase } = this.props;
        this.setState({ loading: true });
        firebase.doSignInWithEmailAndPassword(this.state.email, this.state.password)
            .then((data) => {
                this.setState({ loading: false });
                this.handleModalHide();
                toastManager.add('Logged in Successfully!!', { appearance: 'success', placement: 'bottom-center', autoDismiss: true });
            })
            .catch((error) => {
                this.setState({
                    loading: false, showError: true,
                    errMsg: error.message
                });
            });
    }

    /**
     *Sign in user via Google
     *props : google service provider
     * @memberof Login
     */
    handleGoogleSignIn = () => {
        const { toastManager } = this.props;
        this.setState({ showError: false, errMsg: '' });
        const { firebase } = this.props;
        let provider = firebase.googleAuthProvider;
        let database = firebase.database;
        provider.setCustomParameters({
            prompt: 'select_account'
        });
        firebase.doSignInWithPopup(provider)
            .then((result) => {
                let user = result.user;
                let user_key = user.email.replace('.', '_dot_');
                database.ref('users/' + user_key).set({
                    name: user.displayName,
                    role: 'agent',
                    email: user.email
                }).then((response) => {
                    this.handleModalHide();
                    toastManager.add('Logged in Successfully!!', { appearance: 'success', placement: 'bottom-center', autoDismiss: true });

                }).catch((error) => {
                    this.setState({
                        loading: false, showError: true,
                        errMsg: error.message
                    });
                });
            }).catch((error) => {
                this.setState({
                    loading: false, showError: true,
                    errMsg: error.message
                });
            });
    }

    render() {

        const { loading, email, password, showError, errMsg } = this.state;

        return (
            <div>
                {loading &&
                    <span className="loading">
                        <Loader
                            className="loadingImg"
                            type="Ball-Triangle"
                            color="#20639B"
                            height="100%"
                            width={50}
                        />
                    </span>
                }
                <Row>
                    <Col>
                        {showError && <Row className="py-2 px-0">
                            <Col className="text-center color-red"> {errMsg} </Col>
                        </Row>
                        }
                        <Row className="py-2 px-0">
                            <Col className="text-center">
                                <h3>Login</h3>
                            </Col>
                        </Row>
                        <Row className="py-2 px-0">
                            <Col>
                                <div className="custom-google-btn-div" onClick={this.handleGoogleSignIn}>
                                    <div className="full-width custom-google-btn">
                                        <span className="icon" />
                                        <span className="full-width button-text" > {GOOGLE_SIGN_IN_LABEL}</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="py-2 px-0">
                            <Col>
                                <div className="custom-google-btn-div">
                                    <div className="full-width fb-btn custom-google-btn">
                                        <span className="icon iconfb" />
                                        <span className="full-width button-text"> {FACEBOOK_SIGN_IN_LABEL}</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="py-2 px-0">
                            <Col>
                                <Row className="text-center">
                                    <Col xs="5"><hr /></Col>
                                    <Col xs="2">OR</Col>
                                    <Col xs="5"><hr /></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="py-2 px-0">
                            <Col>
                                <div>
                                    <form onSubmit={this.handleSubmit}>
                                        <FormGroup as={Row} controlId="email">
                                            <FormLabel column sm="3">Email</FormLabel>
                                            <Col sm="9">
                                                <FormControl
                                                    autoFocus
                                                    type="email"
                                                    value={email}
                                                    onChange={this.handleChange}
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup as={Row} controlId="password">
                                            <FormLabel column sm="3">Password</FormLabel>
                                            <Col sm="9">
                                                <FormControl
                                                    value={password}
                                                    onChange={this.handleChange}
                                                    type="password"
                                                />
                                            </Col>
                                        </FormGroup>
                                        <Button
                                            block
                                            className="search-btn"
                                            disabled={!this.validateForm()}
                                            type="submit"
                                            onClick={() => this.handleSignInUser()}
                                        >
                                            {LOGIN_LABEL}
                                        </Button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                        <Row className="py-2 px-0">
                            <Col>
                                <Row>
                                    <Col><p><input type="checkbox"/> Keep me logged in</p></Col>
                                    <Col><p className="right-float">Forgot Password?</p></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="py-2 px-0">
                            <Col className="text-center">
                                <p>Don't have an account? Create an account</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withToastManager(Login);
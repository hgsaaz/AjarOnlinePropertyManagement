import React from 'react';
import { Container, Row, Col, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { GOOGLE_SIGN_IN_LABEL, FACEBOOK_SIGN_IN_LABEL, REGISTER_LABEL } from '../helper/constants';
import {
    withToastManager,
} from 'react-toast-notifications';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            name: "",
            loading: false,
            showError: false,
            errMsg: '',
        };

    }

    validateForm = () => {
        return this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    /**
     * Register user to firebase 
     * props: email, password
     */
    registerUser = () => {
        const { toastManager } = this.props;
        this.setState({ showError: false, errMsg: '' });
        const { firebase } = this.props;
        let database = firebase.database;
        this.setState({ loading: true });
        firebase.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((data) => {
                let user = data.user;
                user.updateProfile({
                    displayName: this.state.name
                }).then(() => {
                    let user_key = user.email.replace('.', '_dot_');
                    database.ref('users/' + user_key).set({
                        name: this.state.name,
                        role: 'agent',
                        email: user.email
                    }).then((response) => {
                        this.setState({ loading: false });
                        this.props.history.push('/home');
                        toastManager.add('Registered Successfully!!', { appearance: 'success', placement: 'bottom-center', autoDismiss: true });
                    }).catch((error) => {
                        this.setState({
                            loading: false,
                            showError: true,
                            errMsg: error.message
                        });
                    });

                }).catch((error) => {
                    this.setState({
                        loading: false, showError: true,
                        errMsg: error.message
                    });
                });

            })
            .catch((error) => {
                this.setState({
                    loading: false, showError: true,
                    errMsg: error.message
                });
            });
    }
    /**
     *Register User to Firebase via google service provider
     *props : service provider
     * @memberof Register
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
                    this.props.history.push('/home');
                    toastManager.add('Registered Successfully!!', { appearance: 'success', placement: 'bottom-center', autoDismiss: true });
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

        const { loading, name, email, password, showError, errMsg } = this.state;
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

                <Container className="register-container">
                    <Row>
                        <Col>
                            {showError && <Row className="row-pad">
                                <Col className="text-center color-red"> {errMsg} </Col>
                            </Row>
                            }
                            <Row className="row-pad">
                                <Col lg="6" xl="6" className="text-center">
                                    <h3>Register</h3>
                                </Col>
                            </Row>
                            <Row className="row-pad">
                                <Col lg="6" xl="6">
                                    <div onClick={this.handleGoogleSignIn}>
                                        <div className="full-width custom-google-btn">
                                            <span className="icon" />
                                            <span className="full-width button-text"> {GOOGLE_SIGN_IN_LABEL}</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="row-pad">
                                <Col lg="6" xl="6">
                                    <div>
                                        <div className="full-width fb-btn custom-google-btn">
                                            <span className="icon iconfb" />
                                            <span className="full-width button-text"> {FACEBOOK_SIGN_IN_LABEL}</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="row-pad">
                                <Col lg="6" xl="6">
                                    <Row className="text-center">
                                        <Col xs="5"><hr /></Col>
                                        <Col xs="2">OR</Col>
                                        <Col xs="5"><hr /></Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="row-pad">
                                <Col lg="6" xl="6">
                                    <div>
                                        <form onSubmit={this.handleSubmit}>
                                            <FormGroup as={Row} controlId="name">
                                                <FormLabel column sm="3">Name</FormLabel>
                                                <Col sm="9">
                                                    <FormControl
                                                        type="text"
                                                        value={name}
                                                        onChange={this.handleChange}
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup as={Row} controlId="email">
                                                <FormLabel column sm="3">Email</FormLabel>
                                                <Col sm="9">
                                                    <FormControl
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
                                                onClick={() => this.registerUser()}
                                            >
                                                {REGISTER_LABEL}
                                            </Button>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="row-pad">
                                <Col className="text-center" lg="6" xl="6">
                                    <p>Already have an account? Login</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withToastManager(Register);
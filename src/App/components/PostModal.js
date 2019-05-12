import React from 'react';
import Select from 'react-select';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { propertyTypes, purposeOptions, regionOptions } from '../helper/data';
import {
    withToastManager,
} from 'react-toast-notifications';

class PostModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPropertyType: null,
            selectedPurpose: null,
            selectedRegion: null,
            mobile: '',
            price: '',
            adDetails: '',
            pictures: [],
            loading: false,
            showError: false,
            errMsg: '',
            currentUser: null
        };

        this.props.firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    currentUser: user
                });

            } else {
            }
        });
    }

    handleSelectChange = (type) => (selectedOption) => {
        this.setState({ [type]: selectedOption });
    }

    onDrop = (picture) => {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    validateForm = () => {
        if (this.state.selectedPropertyType != null
            && this.state.selectedPurpose != null
            && this.state.selectedRegion != null
            && this.state.mobile.length > 0
            && this.state.price.length > 0
            && this.state.adDetails.length > 0) {
            return true;
        }
        return false;
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    /**
     *adds property object to firebase Realtime DB
     *props : object(Property)
     * @memberof PostModal
     */
    addProperty = () => {
        const { toastManager } = this.props;
        this.setState({ showError: false, errMsg: '' });
        if (this.validateForm()) {
            this.setState({ loading: true });
            this.props.firebase.getPropertyRef()
                .push().set({
                    property_type: this.state.selectedPropertyType.value,
                    property_agent_mobile: this.state.mobile,
                    property_purpose: this.state.selectedPurpose.value,
                    property_region: this.state.selectedRegion.value,
                    property_price: this.state.price,
                    property_ad_details: this.state.adDetails,
                    property_verified: false,
                    property_user: this.state.currentUser ? this.state.currentUser.email : ''
                }).then((response) => {
                    this.setState({ loading: false });
                    this.hideModal();
                    toastManager.add('Ad Posted Successfully!!', { appearance: 'success', placement: 'bottom-center', autoDismiss: true });
                }).catch((error) => {
                    this.setState({
                        loading: false, showError: true,
                        errMsg: error.message
                    });
                });
        } else {
            this.setState({ showError: true, errMsg: 'Please fill all details' });
        }
    }

    hideModal = () => {
        this.props.onHide();
    }

    render() {
        const { selectedPropertyType, mobile, selectedPurpose,
            selectedRegion, adDetails, loading, showError, errMsg } = this.state;
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
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

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Post your Ad
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit}>
                            <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Property Type</Form.Label>
                                        <Select
                                            value={selectedPropertyType}
                                            onChange={this.handleSelectChange('selectedPropertyType')}
                                            options={propertyTypes}
                                            placeholder="Select propert type" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="mobile">
                                        <Form.Label>Mobile</Form.Label>
                                        <Form.Control
                                            value={mobile}
                                            onChange={this.handleChange}
                                            type="text" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Purpose</Form.Label>
                                        <Select
                                            value={selectedPurpose}
                                            onChange={this.handleSelectChange('selectedPurpose')}
                                            options={purposeOptions}
                                            placeholder="Select purpose" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Region</Form.Label>
                                        <Select
                                            value={selectedRegion}
                                            onChange={this.handleSelectChange('selectedRegion')}
                                            options={regionOptions}
                                            placeholder="Select region" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                            value={this.state.price}
                                            onChange={this.handleChange}
                                            type="number" />
                                    </Form.Group>
                                </Col>
                                <Col>

                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="adDetails">
                                        <Form.Label>Ad Details</Form.Label>
                                        <Form.Control
                                            value={adDetails}
                                            onChange={this.handleChange}
                                            as="textarea" rows="3" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            {showError && <Form.Row className="row-pad">
                                <Col className="text-center color-red"> {errMsg} </Col>
                            </Form.Row>
                            }
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="postBtn" onClick={this.props.onHide}>Close</Button>
                        <Button className="postBtn" onClick={this.addProperty}>Post</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default withToastManager(PostModal);
import React from 'react';
import { Modal } from 'react-bootstrap';
import Login from './Login';


class LoginModal extends React.Component {

    hideModal = () => {
        this.props.onHide();
    }

    render() {

        const { firebase } = this.props;

        return (
            <div>
                <Modal
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >

                    <Modal.Header className="no-border" closeButton>
                    </Modal.Header>

                    <Modal.Body>
                        <Login firebase={firebase}
                            hide={this.hideModal} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default LoginModal;
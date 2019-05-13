import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

class ShowPropertyCard extends React.Component {

    render() {
        const { forAdmin, property } = this.props;
        return (
            <div>
                {
                    forAdmin ? <Card className="p-3 m-2">

                        <Row>
                            <Col>User : {property.property_user}</Col>
                            <Col>Mobile : {property.property_agent_mobile}</Col>
                            <Col>Price : {property.property_price}</Col>
                        </Row>
                        <Row>
                            <Col>Property type : {property.property_type}</Col>
                            <Col>Purpose : {property.property_purpose}</Col>
                            <Col>Property Region : {property.property_region}</Col>
                        </Row>
                        <Row>
                            <Col>Property Details : {property.property_ad_details}</Col>
                        </Row>
                        <Row>
                            <Col><Button>Verify</Button></Col>
                        </Row>
                    </Card> :
                        <Card className="p-3 m-2">
                            <Row>
                                <Col>Property type : {property.property_type}</Col>
                                <Col>Purpose : {property.property_purpose}</Col>
                                <Col>Property Region : {property.property_region}</Col>
                            </Row>
                            <Row>
                                <Col>Mobile : {property.property_agent_mobile}</Col>
                                <Col>Price : {property.property_price}</Col>
                                <Col>Verification : {property.property_verified ? 'Done' : 'Not Verified'}</Col>
                            </Row>
                            <Row>
                                <Col>Property Details : {property.property_ad_details}</Col>
                            </Row>
                        </Card>

                }
            </div>
        );
    }
}

export default ShowPropertyCard;
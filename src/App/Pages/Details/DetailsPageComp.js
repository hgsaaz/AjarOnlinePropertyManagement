import React from 'react';
import Carousel from '../../components/CarouselSlider';
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import FlexView from 'react-flexview/lib';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class DetailsPageComp extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11


    };

    render() {
        return (
            <div>
                <Container className="form-column">
                    <Card className="con-pad grey-shadow">
                        <Row>
                            <Col>
                                <div>
                                    <nav className="breadcrumb filterDiv">
                                        <Link className="breadcrumb-item" to="/home">Home</Link>
                                        <span className="breadcrumb-item active">{this.props.match.params.pid}</span>
                                    </nav>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="8" xl="8">
                                <Row className="con-pad">
                                    <Col>
                                        <div>
                                            <Carousel />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="d-none d-lg-block con-pad">
                                    <Col style={{ borderBottom: "1px solid rgb(217, 217, 219)" }}>
                                        <h3 className="h3-pad">Facilities</h3>
                                        <FlexView className="flex-pad">
                                            <div className="col-pad-r-15">
                                                <p className="mar-0"><i className="fa fa-th-large primary-color"></i> 800</p>
                                                <p className="d-none d-md-block mar-0">Sq. ft</p>
                                            </div>
                                            <div className="col-pad-10">
                                                <p className="mar-0"><i className="fa fa-bed primary-color"></i> 2</p>
                                                <p className="d-none d-md-block mar-0">Bedrooms</p>
                                            </div>
                                            <div className="col-pad-10">
                                                <p className="mar-0"><i className="fa fa-car primary-color"></i> 3</p>
                                                <p className="d-none d-md-block mar-0">Garages</p>
                                            </div>
                                            <div className="col-pad-10">
                                                <p className="mar-0"><i className="fa fa-bath primary-color"></i> 1</p>
                                                <p className="d-none d-md-block mar-0">Bathrooms</p>
                                            </div>
                                            <div className="col-pad-r-15">
                                                <p className="mar-0"><i className="fa fa-th-large primary-color"></i> 24*7</p>
                                                <p className="d-none d-md-block mar-0">Maintainence</p>
                                            </div>
                                        </FlexView>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="4" xl="4" className="con-pad">
                                <Container
                                    className="grey-shadow con-pad"
                                    style={{
                                        backgroundColor: "rgb(32,99,155,0.2)"
                                    }}>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col className="pad-bot-15">
                                                    <h2>Property Name</h2>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col style={{ borderBottom: "2px solid rgb(134, 136, 137,0.6)" }} className="pad-bot-15 pad-top-15">
                                                    <h4>Features</h4>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col style={{ borderBottom: "2px solid rgb(134, 136, 137,0.6)" }}>
                                                    <Row className="col-pad-15">
                                                        <Col>
                                                            <p className="col-pad-5">
                                                                <i className="fa fa-map-marker"></i>
                                                                &nbsp;&nbsp;&nbsp;Balcony
                                                            </p>
                                                        </Col>
                                                        <Col><p className="col-pad-5"><i className="fa fa-map-marker"></i> &nbsp;&nbsp;&nbsp;Security </p></Col>
                                                    </Row>
                                                    <Row className="col-pad-5">
                                                        <Col><p className="col-pad-5"><i className="fa fa-map-marker"></i> &nbsp;&nbsp;&nbsp;Gym </p></Col>
                                                        <Col><p className="col-pad-5"><i className="fa fa-map-marker"></i> &nbsp;&nbsp;&nbsp;Swimming Pool </p></Col>
                                                    </Row>
                                                    <Row className="col-pad-5">
                                                        <Col><p className="col-pad-5"><i className="fa fa-map-marker"></i> &nbsp;&nbsp;&nbsp;Pool Table </p></Col>
                                                        <Col><p className="col-pad-5"><i className="fa fa-map-marker">
                                                        </i> &nbsp;&nbsp;&nbsp;Recreational
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Activities </p></Col>
                                                    </Row>
                                                    <Row className="col-pad-5">
                                                        <Col><p className="col-pad-5"><i className="fa fa-map-marker"></i> &nbsp;&nbsp;&nbsp;Indoor Games </p></Col>
                                                        <Col><p className="col-pad-5"><i className="fa fa-map-marker"></i> &nbsp;&nbsp;&nbsp;Satellite TV </p></Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <p className="col-pad-15">
                                                        Contact Person : Mr. Hussain <br /><br />
                                                        Mobile : 96632165 <br /><br />
                                                        Email : info@ajar.kw.com <br /><br />
                                                        Please Contact for best price
                                                </p>
                                                </Col>

                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button className="full-width">Contact Us</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="8" xl="8">

                                <Row className="d-lg-none con-pad">
                                    <Col style={{ borderBottom: "1px solid rgb(217, 217, 219)" }}>
                                        <h3 className="h3-pad">Facilities</h3>
                                        <FlexView className="flex-pad">
                                            <div className="col-pad-r-15">
                                                <p className="mar-0"><i className="fa fa-th-large primary-color"></i> 800</p>
                                                <p className="d-none d-md-block mar-0">Sq. ft</p>
                                            </div>
                                            <div className="col-pad-10">
                                                <p className="mar-0"><i className="fa fa-bed primary-color"></i> 2</p>
                                                <p className="d-none d-md-block mar-0">Bedrooms</p>
                                            </div>
                                            <div className="col-pad-10">
                                                <p className="mar-0"><i className="fa fa-car primary-color"></i> 3</p>
                                                <p className="d-none d-md-block mar-0">Garages</p>
                                            </div>
                                            <div className="col-pad-10">
                                                <p className="mar-0"><i className="fa fa-bath primary-color"></i> 1</p>
                                                <p className="d-none d-md-block mar-0">Bathrooms</p>
                                            </div>
                                            <div className="col-pad-r-15">
                                                <p className="mar-0"><i className="fa fa-th-large primary-color"></i> 24*7</p>
                                                <p className="d-none d-md-block mar-0">Maintainence</p>
                                            </div>
                                        </FlexView>
                                    </Col>
                                </Row>

                                <Row className="con-pad">
                                    <Col style={{ borderBottom: "1px solid rgb(217, 217, 219)" }}>
                                        <h3 className="h3-pad-10">Ad Details</h3>
                                        <p>
                                            Apartment Super Deluxe consists of a hall 10x4 + master room 6.5x5.5 + two rooms including  "+
                                            "bathroom (size of the room 4x4) + kitchen 4x3.5 + master server "+
                                            "room 2x1.75 In addition to central heating and adaptation center and elevator and  "+
                                            "there is a guard suitable for a small family
                                    </p>
                                    </Col>
                                </Row>
                                <Row className="con-pad">
                                    <Col style={{ borderBottom: "1px solid rgb(217, 217, 219)" }}>
                                        <h3 className="h3-pad-10">Address</h3>
                                        <p>
                                            Mahaboula, Block-1, Street No.-219, Building No.-55
                                    </p>
                                    </Col>
                                </Row>
                                <Row className="con-pad">
                                    <Col>
                                        <h3 className="h3-pad-10">Location</h3>
                                        <div className="map-height full-width">
                                            <GoogleMapReact
                                                defaultCenter={this.props.center}
                                                defaultZoom={this.props.zoom}
                                            >
                                                <AnyReactComponent
                                                    lat={59.955413}
                                                    lng={30.337844}
                                                    text="My Marker"
                                                />
                                            </GoogleMapReact>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="4" xl="4" className="con-pad">
                                <Container className="grey-shadow">
                                    <Row>
                                        <Col
                                            className="white-text similar-porp-sec "
                                            style={{
                                                backgroundColor: "rgb(32,99,155,0.8)",
                                                fontWeight: "bold"
                                            }}>
                                            Similar Properties
                                    </Col>
                                    </Row>
                                    <Row>
                                        <Col>2</Col>
                                    </Row>
                                    <Row>
                                        <Col>3</Col>
                                    </Row>
                                    <Row>
                                        <Col>4</Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </div>
        );
    }

}

export default DetailsPageComp;
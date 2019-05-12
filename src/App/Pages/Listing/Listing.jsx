
import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import FlexView from 'react-flexview';
import { Link } from 'react-router-dom';
import { properties } from '../../helper/data'

class PropertyListingComp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: { min: 2, max: 10 },
            detailsPath: this.props.match.params.areaid
        };
    }

    render() {

        const areaSelected = this.props.match.params.areaid;

        return (
            <div>
                <div className="container listing-div">
                    <Card className="pad-3" style={{ boxShadow: "2px 2px 2px 2px #ebebeb" }}>
                        <div className="container">
                            <Row>
                                <Col>
                                    <div>
                                        <nav className="breadcrumb filterDiv">
                                            <Link className="breadcrumb-item" to="/home">Home</Link>
                                            <span className="breadcrumb-item active">{areaSelected != null ? areaSelected : 'All areas'} &nbsp;</span>
                                        </nav>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <h3 className="pad-3 mar-bot-15">
                                            Properties in {areaSelected != null ? areaSelected : 'All areas'}
                                        </h3>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-none d-md-block" md="12" lg="2">
                                    <Card className="filterCard">

                                        <Card.Body>
                                            <Card.Title style={{ borderBottom: "1px solid #ebebeb" }}>Filters</Card.Title>
                                            <div>
                                                Bedrooms
                                        <form>
                                                    <input type="checkbox" />&nbsp;1<br />
                                                    <input type="checkbox" />&nbsp;2<br />
                                                    <input type="checkbox" />&nbsp;3<br />
                                                    <input type="checkbox" />&nbsp;4<br />
                                                    <input type="checkbox" />&nbsp;4+<br />
                                                </form>
                                            </div>
                                            <br />
                                            <div>
                                                Price
                                        <div className="slidecontainer">
                                                    <input type="range" min="1" max="100" value="40" className="slider" id="myRange" readOnly />
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md="12" lg="10" xl="10">
                                    {properties.map((property) => {
                                        return (
                                            <Link className="black-color" to={this.state.detailsPath + '/' + property.id} key={property.id}>
                                                <Card className="card-view" key={property.id} style={{ boxShadow: "2px 2px #ebebeb" }}>
                                                    <Row>
                                                        <Col xs="12" sm="12" md="12" lg="3">
                                                            <div className={property.imageUrl}>
                                                                <div className={property.ptClass}>FOR {property.propertyType}</div>
                                                            </div>
                                                        </Col>
                                                        <Col xs="12" sm="12" md="12" lg="6">
                                                            <div className="property-info">
                                                                <div className="feature-title pad-5" style={{ borderBottom: "1px solid #ebebeb" }}>
                                                                    <h5>{property.name}</h5>
                                                                    <p><i className="fa fa-map-marker"></i> {property.loaction}</p>
                                                                </div>
                                                                <div className="pad-top-10" style={{ height: "48%" }} >
                                                                    <p>
                                                                        {property.desp}
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <FlexView>
                                                                        <div className="pad-r-10">
                                                                            <p className="mar-0"><i className="fa fa-th-large primary-color"></i> {property.squarefoot}</p>
                                                                            <p className="d-none d-md-block mar-0">Sq. ft</p>
                                                                        </div>
                                                                        <div className="flex-div-pad">
                                                                            <p className="mar-0"><i className="fa fa-bed primary-color"></i> {property.bedroom}</p>
                                                                            <p className="d-none d-md-block mar-0">Bedrooms</p>
                                                                        </div>
                                                                        <div className="flex-div-pad">
                                                                            <p className="mar-0"><i className="fa fa-car primary-color"></i> {property.garage}</p>
                                                                            <p className="d-none d-md-block mar-0">Garages</p>
                                                                        </div>
                                                                        <div className="flex-div-pad">
                                                                            <p className="mar-0"><i className="fa fa-bath primary-color"></i> {property.bathroom}</p>
                                                                            <p className="d-none d-md-block mar-0">Bathrooms</p>
                                                                        </div>
                                                                    </FlexView>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs="12" sm="12" md="12" lg="3">
                                                            <div>
                                                                <div className="room-info1">
                                                                    <div className="rm-inline-left">
                                                                        <p><i className="fa fa-user"></i> {property.user.name}</p>
                                                                        <p><i className="fa fa-phone"></i> {property.user.number}</p>
                                                                    </div>
                                                                    <div className="rm-inline-right">
                                                                        <p><i className="fa fa-whatsapp"></i> {property.user.number}</p>
                                                                        <p><i className="fa fa-clock-o"></i> {property.user.days_ago}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="price-view">{property.price}</div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Link>
                                        )
                                    })}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default PropertyListingComp;
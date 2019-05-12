import React from 'react';
import Select from 'react-select';
import { Col, Form, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { propertyTypeOptions, areaOptions } from '../../helper/data';

class FilterFormComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPropertyType: null,
            listingPath: '',
            selectedArea: null
        };
    }

    handlePropertyChange = (selectedOption) => {
        this.setState({ selectedPropertyType: selectedOption });
    }

    handleAreaChange = (selectedOption) => {
        this.setState({
            selectedArea: selectedOption,
            listingPath: '/listing/' + selectedOption.value
        });
    }

    render() {

        const { selectedArea, selectedPropertyType, listingPath } = this.state;

        return (
            <Container>
                <Row className='justify-content-center'>
                    <Col xs="12" sm="12" md="10" lg="9" xl='9' >
                        <div className="filter-section-div">
                            <Form>
                                <Form.Row className="col_row">

                                    <Col className="form-column" md="5" lg="5">
                                        <Select
                                            value={selectedArea}
                                            onChange={this.handleAreaChange}
                                            options={areaOptions}
                                            placeholder="Select area" />
                                    </Col>

                                    <Col className="form-column" md="5" lg="5">
                                        <Select
                                            value={selectedPropertyType}
                                            onChange={this.handlePropertyChange}
                                            options={propertyTypeOptions}
                                            placeholder="Select price range" />
                                    </Col>

                                    <Col className="form-column-btn" md="2" lg="2">
                                        <Link className="search-btn full-width" to={{
                                            pathname: listingPath,
                                            state: {
                                                priceSelected: selectedPropertyType,
                                                areaSelected: selectedArea
                                            }
                                        }}>Search</Link>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FilterFormComp;
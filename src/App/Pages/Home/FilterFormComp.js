import React from 'react';
import Select from 'react-select';
import { Col, Form, Container, Row, Button } from 'react-bootstrap';
import { generatePath, withRouter } from 'react-router-dom';
import { propertyTypeOptions, areaOptions } from '../../helper/data';
import {
    withToastManager,
} from 'react-toast-notifications';
import PropTypes from 'prop-types'

class FilterFormComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPropertyType: null,
            listingPath: '',
            selectedArea: null
        };
    }

    static contextTypes = {
        router: PropTypes.object
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

    handleSearchClick = () => {
        const { selectedArea, selectedPropertyType, listingPath } = this.state;
        if(listingPath === ''){
            const { toastManager } = this.props;
            toastManager.add('Please select area', { appearance: 'error', placement: 'bottom-center', autoDismiss: true });
        }else {
            const path = generatePath(listingPath, {
                priceSelected: selectedPropertyType,
                areaSelected: selectedArea
            });
            
            this.props.history.push(path);
        }
        
        
    }

render() {

    const { selectedArea, selectedPropertyType } = this.state;

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs="12" sm="12" md="10" lg="9" xl='9' >
                    <div className="filter-section-div">
                        <form>
                            <Form.Row className="col_row">

                                <Col className="p-2" md="5" lg="5">
                                    <Select
                                        value={selectedArea}
                                        onChange={this.handleAreaChange}
                                        options={areaOptions}
                                        placeholder="Select area" />
                                </Col>

                                <Col className="p-2" md="5" lg="5">
                                    <Select
                                        value={selectedPropertyType}
                                        onChange={this.handlePropertyChange}
                                        options={propertyTypeOptions}
                                        placeholder="Select price range" />
                                </Col>

                                <Col className="p-2 form-column-btn" md="2" lg="2">
                                    <Button className="search-btn full-width" onClick={this.handleSearchClick}>Search</Button>

                                </Col>
                            </Form.Row>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
}

export default withRouter(withToastManager(FilterFormComp));
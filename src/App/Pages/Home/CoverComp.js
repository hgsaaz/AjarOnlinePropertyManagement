
import React from 'react';
import FilterFormComp from './FilterFormComp';
import FlexView from 'react-flexview';

class CoverComp extends React.Component {

    render() {
        const { firebase } = this.props;
        return (
            <div className="background-section">
                <FlexView className="hero-section" vAlignContent='center' hAlignContent='center'>
                    <FilterFormComp firebase={firebase} />
                </FlexView>
            </div>
        );
    }
}

export default CoverComp;
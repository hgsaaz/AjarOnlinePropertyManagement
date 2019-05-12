import React from 'react';

import CoverComp from './CoverComp'
import FeatureListingComp from './FeatureListingComp';

class Home extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <CoverComp firebase={this.props.firebase} />
                    <FeatureListingComp firebase={this.props.firebase} />
                </div>
            </div>
        );
    }
}

export default Home;

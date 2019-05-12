import React from 'react';
import FlexView from 'react-flexview';

class FooterComp extends React.Component {

    render() {

        return (
            <div>
                <FlexView className="footer text-center" hAlignContent='center'>
                    Copyright 2017 © Ajar Technology General Trading WLL, All rights reserved
                </FlexView>
            </div>
        );
    }
}

export default FooterComp;
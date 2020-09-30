import React from 'react';
import {FuseNavigation} from '@fuse';
import connect from 'react-redux/es/connect/connect';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';

const Navigation = ({navigation, layout, dense, className}) => {
    return (
        <FuseNavigation className={classNames("navigation", className)} navigation={navigation} layout={layout} dense={dense}/>
    );
};

function mapStateToProps({fuse})
{
    return {
        navigation: fuse.navigation
    }
}

Navigation.defaultProps = {
    layout: "vertical"
};

export default withRouter(connect(mapStateToProps)(Navigation));

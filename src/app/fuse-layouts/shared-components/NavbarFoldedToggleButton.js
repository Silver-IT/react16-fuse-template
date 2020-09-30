import React from 'react';
import {Icon, IconButton} from '@material-ui/core';
import _ from '@lodash';
import {bindActionCreators} from 'redux';
import * as Actions from 'app/store/actions';
import connect from 'react-redux/es/connect/connect';

const NavbarFoldedToggleButton = ({settings, setDefaultSettings, children}) => {
    return (
        <IconButton
            onClick={() => {
                setDefaultSettings(_.set({}, 'layout.config.navbar.folded', !settings.layout.config.navbar.folded));
            }}
            color="inherit"
        >
            {children}
        </IconButton>
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setDefaultSettings: Actions.setDefaultSettings
    }, dispatch);
}

function mapStateToProps({fuse})
{
    return {
        settings: fuse.settings.current
    }
}

NavbarFoldedToggleButton.defaultProps = {
    children: <Icon>menu</Icon>
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarFoldedToggleButton);

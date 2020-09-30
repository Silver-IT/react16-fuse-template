import React from 'react';
import {Icon, IconButton} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import * as quickPanelActions from './store/actions';

const QuickPanelToggleButton = ({toggleQuickPanel, children}) => {
    return (
        <IconButton className="w-64 h-64" onClick={toggleQuickPanel}>
            {children}
        </IconButton>
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        toggleQuickPanel: quickPanelActions.toggleQuickPanel
    }, dispatch);
}

QuickPanelToggleButton.defaultProps = {
    children: <Icon>format_list_bulleted</Icon>
};

export default connect(null, mapDispatchToProps)(QuickPanelToggleButton);

import React from 'react';
import {Icon, IconButton} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import * as chatPanelActions from './store/actions';

const ChatPanelToggleButton = ({toggleChatPanel, children}) => {
    return (
        <IconButton className="w-64 h-64" onClick={toggleChatPanel}>
            {children}
        </IconButton>
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        toggleChatPanel: chatPanelActions.toggleChatPanel
    }, dispatch);
}

ChatPanelToggleButton.defaultProps = {
    children: <Icon>chat</Icon>
};

export default connect(null, mapDispatchToProps)(ChatPanelToggleButton);

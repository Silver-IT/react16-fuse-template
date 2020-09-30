import React from 'react';
import {Dialog} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'app/store/actions';

const FuseDialog = (props) => {
    return (
        <Dialog
            open={props.state}
            onClose={props.closeDialog}
            aria-labelledby="fuse-dialog-title"
            {...props.options}
        />
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        closeDialog: Actions.closeDialog
    }, dispatch);
}

function mapStateToProps({fuse})
{
    return {
        state  : fuse.dialog.state,
        options: fuse.dialog.options
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FuseDialog);

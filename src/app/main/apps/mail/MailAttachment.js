import React from 'react';
import {Icon, IconButton, Typography, withStyles} from '@material-ui/core';
import classNames from 'classnames';

const styles = theme => ({
    root    : {
        fontSize       : 13,
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        border         : '1px solid rgba(0, 0, 0, 0.16)',
        paddingLeft    : 16,
        marginBottom   : 8,
        borderRadius   : 2,
        display        : 'flex',
        justifyContent : 'space-between',
        alignItems     : 'center'
    },
    filename: {
        fontWeight: 600
    },
    size    : {
        marginLeft: 8,
        fontWeight: 300
    }
});

const MailAttachment = ({classes, className, fileName, size}) => {
    return (
        <div className={classNames(classes.root, className)}>
            <div className="flex">
                <Typography variant="caption" className={classes.filename}>{fileName}</Typography>
                <Typography variant="caption" className={classes.size}>({size})</Typography>
            </div>
            <IconButton>
                <Icon className="text-16">close</Icon>
            </IconButton>
        </div>
    );
};

export default withStyles(styles, {withTheme: true})(MailAttachment);

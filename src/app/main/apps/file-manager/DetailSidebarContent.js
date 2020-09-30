import React from 'react';
import {withStyles, FormControlLabel, Icon, Switch, Typography} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import classNames from 'classnames';

const styles = theme => ({
    table   : {
        '& th': {
            padding: '16px 0'
        }
    },
    typeIcon: {
        '&.folder:before'     : {
            content: "'folder'",
            color  : '#FFB300'
        },
        '&.document:before'   : {
            content: "'insert_drive_file'",
            color  : '#1565C0'
        },
        '&.spreadsheet:before': {
            content: "'insert_chart'",
            color  : '#4CAF50'
        }
    }
});

const DetailSidebarContent = ({classes, files, selectedItem}) => {

    const selected = files[selectedItem];

    if ( !selected )
    {
        return null;
    }

    return (
        <FuseAnimate animation="transition.slideUpIn" delay={200}>

            <div className="file-details p-16 sm:p-24">

                <div className="preview h-128 sm:h-256 file-icon flex items-center justify-center">
                    <FuseAnimate animation="transition.expandIn" delay={300}>
                        <Icon className={classNames(classes.typeIcon, selected.type, "text-48")}/>
                    </FuseAnimate>
                </div>

                <FormControlLabel
                    className="offline-switch"
                    control={
                        <Switch
                            checked={selected.offline}
                            aria-label="Available Offline"
                        />
                    }
                    label="Available Offline"
                />

                <Typography variant="subtitle1" className="py-16">Info</Typography>

                <table className={classNames(classes.table, "w-full, text-left")}>

                    <tbody>

                        <tr className="type">
                            <th>Type</th>
                            <td>{selected.type}</td>
                        </tr>

                        <tr className="size">
                            <th>Size</th>
                            <td>{selected.size === '' ? '-' : selected.size}</td>
                        </tr>

                        <tr className="location">
                            <th>Location</th>
                            <td>{selected.location}</td>
                        </tr>

                        <tr className="owner">
                            <th>Owner</th>
                            <td>{selected.owner}</td>
                        </tr>

                        <tr className="modified">
                            <th>Modified</th>
                            <td>{selected.modified}</td>
                        </tr>

                        <tr className="opened">
                            <th>Opened</th>
                            <td>{selected.opened}</td>
                        </tr>

                        <tr className="created">
                            <th>Created</th>
                            <td>{selected.created}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </FuseAnimate>
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({}, dispatch);
}

function mapStateToProps({fileManagerApp})
{
    return {
        files       : fileManagerApp.files,
        selectedItem: fileManagerApp.selectedItem
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailSidebarContent)));

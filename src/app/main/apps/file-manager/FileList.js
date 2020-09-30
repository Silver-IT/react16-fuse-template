import React from 'react';
import {withStyles, Hidden, Icon, IconButton, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as Actions from './store/actions';

const styles = theme => ({
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

const FileList = ({classes, files, selectedItem, setSelectedItem, pageLayout}) => {

    return (
        <FuseAnimate animation="transition.slideUpIn" delay={300}>
            <Table>

                <TableHead>
                    <TableRow>
                        <TableCell className="max-w-64 w-64 p-0 text-center"> </TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell className="hidden sm:table-cell">Type</TableCell>
                        <TableCell className="hidden sm:table-cell">Owner</TableCell>
                        <TableCell className="text-center hidden sm:table-cell">Size</TableCell>
                        <TableCell className="hidden sm:table-cell">Modified</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {Object.entries(files).map(([key, n]) => {
                        return (
                            <TableRow
                                key={n.id}
                                hover
                                onClick={event => setSelectedItem(n.id)}
                                selected={n.id === selectedItem}
                                className="cursor-pointer"
                            >
                                <TableCell className="max-w-64 w-64 p-0 text-center">
                                    <Icon className={classNames(classes.typeIcon, n.type)}></Icon>
                                </TableCell>
                                <TableCell>{n.name}</TableCell>
                                <TableCell className="hidden sm:table-cell">{n.type}</TableCell>
                                <TableCell className="hidden sm:table-cell">{n.owner}</TableCell>
                                <TableCell className="text-center hidden sm:table-cell">{n.size === '' ? '-' : n.size}</TableCell>
                                <TableCell className="hidden sm:table-cell">{n.modified}</TableCell>
                                <Hidden lgUp>
                                    <TableCell>
                                        <IconButton
                                            onClick={(ev) => pageLayout().toggleRightSidebar()}
                                            aria-label="open right sidebar"
                                        >
                                            <Icon>info</Icon>
                                        </IconButton>
                                    </TableCell>
                                </Hidden>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </FuseAnimate>
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getFiles       : Actions.getFiles,
        setSelectedItem: Actions.setSelectedItem
    }, dispatch);
}

function mapStateToProps({fileManagerApp})
{
    return {
        files       : fileManagerApp.files,
        selectedItem: fileManagerApp.selectedItem
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(FileList)));

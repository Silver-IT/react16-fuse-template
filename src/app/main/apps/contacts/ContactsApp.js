import React, {Component} from 'react';
import {withStyles, Fab, Icon} from '@material-ui/core';
import {FusePageSimple, FuseAnimate} from '@fuse';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import withReducer from 'app/store/withReducer';
import _ from '@lodash';
import ContactsList from './ContactsList';
import ContactsHeader from './ContactsHeader';
import ContactsSidebarContent from './ContactsSidebarContent';
import ContactDialog from './ContactDialog';
import * as Actions from './store/actions';
import reducer from './store/reducers';

const styles = theme => ({
    addButton: {
        position: 'absolute',
        right   : 12,
        bottom  : 12,
        zIndex  : 99
    }
});

class ContactsApp extends Component {

    componentDidMount()
    {
        this.props.getContacts(this.props.match.params);
        this.props.getUserData();
    }

    componentDidUpdate(prevProps, prevState)
    {
        if ( !_.isEqual(this.props.location, prevProps.location) )
        {
            this.props.getContacts(this.props.match.params);
        }
    }

    render()
    {
        const {classes, openNewContactDialog} = this.props;

        return (
            <React.Fragment>
                <FusePageSimple
                    classes={{
                        contentCardWrapper: "p-16 sm:p-24 pb-80",
                        leftSidebar       : "w-256 border-0",
                        header            : "min-h-72 h-72 sm:h-136 sm:min-h-136"
                    }}
                    header={
                        <ContactsHeader pageLayout={() => this.pageLayout}/>
                    }
                    content={
                        <ContactsList/>
                    }
                    leftSidebarContent={
                        <ContactsSidebarContent/>
                    }
                    sidebarInner
                    onRef={instance => {
                        this.pageLayout = instance;
                    }}
                    innerScroll
                />
                <FuseAnimate animation="transition.expandIn" delay={300}>
                    <Fab
                        color="primary"
                        aria-label="add"
                        className={classes.addButton}
                        onClick={openNewContactDialog}
                    >
                        <Icon>person_add</Icon>
                    </Fab>
                </FuseAnimate>
                <ContactDialog/>
            </React.Fragment>
        )
    };
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getContacts         : Actions.getContacts,
        getUserData         : Actions.getUserData,
        openNewContactDialog: Actions.openNewContactDialog
    }, dispatch);
}

function mapStateToProps({contactsApp})
{
    return {
        contacts          : contactsApp.contacts.entities,
        selectedContactIds: contactsApp.contacts.selectedContactIds,
        searchText        : contactsApp.contacts.searchText,
        user              : contactsApp.user
    }
}

export default withReducer('contactsApp', reducer)(withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsApp))));

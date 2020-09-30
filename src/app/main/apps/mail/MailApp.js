import React, {Component} from 'react';
import {FusePageCarded} from '@fuse';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import withReducer from 'app/store/withReducer';
import MailList from './mails/MailList';
import MailDetails from './mail/MailDetails';
import MailsToolbar from './mails/MailsToolbar';
import MailToolbar from './mail/MailToolbar';
import MailAppHeader from './MailAppHeader';
import MailAppSidebarHeader from './MailAppSidebarHeader';
import MailAppSidebarContent from './MailAppSidebarContent';
import * as Actions from './store/actions';
import reducer from './store/reducers';

class MailApp extends Component {

    componentDidMount()
    {
        this.props.getFilters();
        this.props.getFolders();
        this.props.getLabels();
    }

    render()
    {
        const {match} = this.props;
        const {params} = match;

        return (
            <FusePageCarded
                classes={{
                    root   : "w-full",
                    content: "flex flex-col",
                    header : "items-center min-h-72 h-72 sm:h-136 sm:min-h-136"
                }}
                header={
                    <MailAppHeader pageLayout={() => this.pageLayout}/>
                }
                contentToolbar={
                    params.mailId ? (
                        <MailToolbar/>
                    ) : (
                        <MailsToolbar/>
                    )
                }
                content={
                    params.mailId ? (
                        <MailDetails/>
                    ) : (
                        <MailList/>
                    )
                }
                leftSidebarHeader={
                    <MailAppSidebarHeader/>
                }
                leftSidebarContent={
                    <MailAppSidebarContent/>
                }
                onRef={instance => {
                    this.pageLayout = instance;
                }}
                innerScroll
            />
        )
    };
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getFilters: Actions.getFilters,
        getFolders: Actions.getFolders,
        getLabels : Actions.getLabels
    }, dispatch);
}

export default withReducer('mailApp', reducer)(connect(null, mapDispatchToProps)(MailApp));

import React, {Component} from 'react';
import {withStyles, List, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate, FuseAnimateGroup} from '@fuse';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import _ from '@lodash';
import * as Actions from '../store/actions';
import MailListItem from './MailListItem';

const styles = theme => ({
    avatar: {
        backgroundColor: theme.palette.primary[500]
    }
});

class MailList extends Component {

    componentDidMount()
    {
        this.props.getMails(this.props.match.params);
    }

    componentDidUpdate(prevProps, prevState)
    {
        if ( !_.isEqual(this.props.location, prevProps.location) )
        {
            this.props.getMails(this.props.match.params);
        }
    }

    getFilteredArray = (entities, searchText) => {
        const arr = Object.keys(entities).map((id) => entities[id]);
        if ( searchText.length === 0 )
        {
            return arr;
        }
        return FuseUtils.filterArrayByString(arr, searchText);
    };

    render()
    {
        const {mails, searchText} = this.props;

        const arr = this.getFilteredArray(mails, searchText);

        if ( arr.length === 0 )
        {
            return (
                <FuseAnimate delay={100}>
                    <div className="flex flex-1 items-center justify-center h-full">
                        <Typography color="textSecondary" variant="h5">
                            There are no messages!
                        </Typography>
                    </div>
                </FuseAnimate>
            );
        }

        return (
            <List className="p-0">
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    {
                        arr.map((mail) => (
                                <MailListItem mail={mail} key={mail.id}/>
                            )
                        )
                    }
                </FuseAnimateGroup>
            </List>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getMails: Actions.getMails
    }, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        mails     : mailApp.mails.entities,
        searchText: mailApp.mails.searchText
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(MailList)));

import React from 'react';
import {withStyles, Avatar, Typography, Checkbox, ListItem} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import _ from '@lodash';
import * as Actions from '../store/actions/index';
import MailChip from '../MailChip';

const pathToRegexp = require('path-to-regexp');

const styles = theme => ({
    mailItem: {
        borderBottom: '1px solid  ' + theme.palette.divider,

        '&.unread'  : {
            background: 'rgba(0,0,0,0.03)'
        },
        '&.selected': {
            '&::after': {
                content        : '""',
                position       : 'absolute',
                left           : 0,
                display        : 'block',
                height         : '100%',
                width          : 3,
                backgroundColor: theme.palette.primary.main
            }
        }
    },
    avatar  : {
        backgroundColor: theme.palette.primary[500]
    }
});

const MailListItem = ({mail, labels, classes, match, history, selectedMailIds, toggleInSelectedMails}) => {

    const toPath = pathToRegexp.compile(match.path);
    const checked = selectedMailIds.length > 0 && selectedMailIds.find(id => id === mail.id) !== undefined;

    return (
        <ListItem
            dense
            button
            onClick={() => history.push(toPath(
                {
                    ...match.params,
                    mailId: mail.id
                }
            ))}
            className={classNames(classes.mailItem, checked && "selected", !mail.read && "unread", "py-16 pl-0 pr-8 sm:pl-8 sm:pr-24")}>

            <Checkbox
                tabIndex={-1}
                disableRipple
                checked={checked}
                onChange={() => toggleInSelectedMails(mail.id)}
                onClick={(ev) => ev.stopPropagation()}
            />

            <div className="flex flex-1 flex-col relative overflow-hidden">

                <div className="flex items-center justify-between px-16 pb-8">
                    <div className="flex items-center">
                        {mail.from.avatar ? (
                            <Avatar className="mr-8" alt={mail.from.name} src={mail.from.avatar}/>
                        ) : (
                            <Avatar className={classNames(classes.avatar, "mr-8")}>
                                {mail.from.name[0]}
                            </Avatar>
                        )}
                        <Typography variant="subtitle1">{mail.from.name}</Typography>
                    </div>
                    <Typography variant="subtitle1">{mail.time}</Typography>
                </div>

                <div className="flex flex-col px-16 py-0">
                    <Typography className="truncate">{mail.subject}</Typography>
                    <Typography color="textSecondary" className="truncate">{_.truncate(mail.message.replace(/<(?:.|\n)*?>/gm, ''), {'length': 180})}</Typography>
                </div>

                <div className="flex justify-end">
                    {labels && mail.labels.map(label => (
                        <MailChip className="mr-4" title={_.find(labels, {id: label}).title} color={_.find(labels, {id: label}).color} key={label}/>
                    ))}
                </div>
            </div>
        </ListItem>
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        toggleInSelectedMails: Actions.toggleInSelectedMails
    }, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        selectedMailIds: mailApp.mails.selectedMailIds,
        labels         : mailApp.labels
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(MailListItem)));

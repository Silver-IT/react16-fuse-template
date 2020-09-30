import React, {Component} from 'react';
import {Avatar, Paper, Typography, withStyles, TextField, IconButton, Icon} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import classNames from 'classnames';
import moment from 'moment/moment';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import _ from '@lodash';
import * as Actions from './store/actions';

const styles = theme => ({
    messageRow: {
        '&.contact'                       : {
            '& .bubble'       : {
                backgroundColor        : theme.palette.primary.main,
                color                  : theme.palette.primary.contrastText,
                borderTopLeftRadius    : 5,
                borderBottomLeftRadius : 5,
                borderTopRightRadius   : 20,
                borderBottomRightRadius: 20,
                '& .time'              : {
                    marginLeft: 12
                }
            },
            '&.first-of-group': {
                '& .bubble': {
                    borderTopLeftRadius: 20
                }
            },
            '&.last-of-group' : {
                '& .bubble': {
                    borderBottomLeftRadius: 20
                }
            }
        },
        '&.me'                            : {
            paddingLeft: 40,

            '& .avatar'       : {
                order : 2,
                margin: '0 0 0 16px'
            },
            '& .bubble'       : {
                marginLeft             : 'auto',
                backgroundColor        : theme.palette.grey[300],
                color                  : theme.palette.getContrastText(theme.palette.grey[300]),
                borderTopLeftRadius    : 20,
                borderBottomLeftRadius : 20,
                borderTopRightRadius   : 5,
                borderBottomRightRadius: 5,
                '& .time'              : {
                    justifyContent: 'flex-end',
                    right         : 0,
                    marginRight   : 12
                }
            },
            '&.first-of-group': {
                '& .bubble': {
                    borderTopRightRadius: 20
                }
            },

            '&.last-of-group': {
                '& .bubble': {
                    borderBottomRightRadius: 20
                }
            }
        },
        '&.contact + .me, &.me + .contact': {
            paddingTop: 20,
            marginTop : 20
        },
        '&.first-of-group'                : {
            '& .bubble': {
                borderTopLeftRadius: 20,
                paddingTop         : 13
            }
        },
        '&.last-of-group'                 : {
            '& .bubble': {
                borderBottomLeftRadius: 20,
                paddingBottom         : 13,
                '& .time'             : {
                    display: 'flex'
                }
            }
        }
    }
});

class Chat extends Component {

    state = {
        messageText: ''
    };

    componentDidMount(prevProps)
    {
        if ( this.props.chat )
        {
            this.scrollToBottom();
        }
    }

    componentDidUpdate(prevProps)
    {
        if ( this.props.chat && !_.isEqual(prevProps.chat, this.props.chat) )
        {
            this.scrollToBottom();
        }
    }

    shouldShowContactAvatar = (item, i) => {
        return (
            item.who === this.props.selectedContactId &&
            ((this.props.chat.dialog[i + 1] && this.props.chat.dialog[i + 1].who !== this.props.selectedContactId) || !this.props.chat.dialog[i + 1])
        );
    };

    isFirstMessageOfGroup = (item, i) => {
        return (i === 0 || (this.props.chat.dialog[i - 1] && this.props.chat.dialog[i - 1].who !== item.who));
    };

    isLastMessageOfGroup = (item, i) => {
        return (i === this.props.chat.dialog.length - 1 || (this.props.chat.dialog[i + 1] && this.props.chat.dialog[i + 1].who !== item.who));
    };

    onInputChange = (ev) => {
        this.setState({messageText: ev.target.value});
    };

    onMessageSubmit = (ev) => {
        ev.preventDefault();
        if ( this.state.messageText === '' )
        {
            return;
        }
        this.props.sendMessage(this.state.messageText, this.props.chat.id, this.props.user.id)
            .then(() => {
                this.setState({messageText: ''});
                this.scrollToBottom();
            });
    };

    scrollToBottom = () => {
        this.chatScroll.scrollTop = this.chatScroll.scrollHeight;
    };

    render()
    {
        const {classes, chat, contacts, user, className} = this.props;
        const {messageText} = this.state;
        return (
            <div className={classNames("flex flex-col relative", className)}>
                <FuseScrollbars
                    containerRef={(ref) => {
                        this.chatScroll = ref
                    }}
                    className="flex flex-1 flex-col overflow-y-auto"
                >
                    {chat && chat.dialog.length > 0 ?
                        (
                            <div className="flex flex-col pt-16 pl-56 pr-16 pb-40">
                                {chat.dialog.map((item, i) => {
                                    const contact = item.who === user.id ? user : contacts.find(_contact => _contact.id === item.who);
                                    return (
                                        <div
                                            key={item.time}
                                            className={classNames(
                                                classes.messageRow,
                                                "flex flex-col flex-no-grow flex-no-shrink items-start justify-end relative pr-16 pb-4 pl-16",
                                                {'me': item.who === user.id},
                                                {'contact': item.who !== user.id},
                                                {'first-of-group': this.isFirstMessageOfGroup(item, i)},
                                                {'last-of-group': this.isLastMessageOfGroup(item, i)},
                                                (i + 1) === chat.dialog.length && "pb-96"
                                            )}
                                        >
                                            {this.shouldShowContactAvatar(item, i) && (
                                                <Avatar className="avatar absolute pin-l m-0 -ml-32" src={contact.avatar}/>
                                            )}
                                            <div className="bubble flex relative items-center justify-center p-12 max-w-full">
                                                <div className="leading-tight whitespace-pre-wrap">{item.message}</div>
                                                <Typography className="time absolute hidden w-full text-11 mt-8 -mb-24 pin-l pin-b whitespace-no-wrap"
                                                            color="textSecondary">{moment(item.time).format('MMMM Do YYYY, h:mm:ss a')}</Typography>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className="flex flex-col flex-1">
                                <div className="flex flex-col flex-1 items-center justify-center">
                                    <Icon className="text-128" color="disabled">chat</Icon>
                                </div>
                                <Typography className="px-16 pb-24 text-center" color="textSecondary">
                                    Start a conversation by typing your message below.
                                </Typography>
                            </div>
                        )
                    }

                </FuseScrollbars>
                {chat && (
                    <form onSubmit={this.onMessageSubmit} className="absolute pin-b pin-r pin-l py-16 px-8">
                        <Paper className="flex items-center relative rounded-24" elevation={1}>
                            <TextField
                                autoFocus={false}
                                id="message-input"
                                className="flex-1"
                                InputProps={{
                                    disableUnderline: true,
                                    classes         : {
                                        root : "flex flex-grow flex-no-shrink ml-16 mr-48 my-8",
                                        input: ""
                                    },
                                    placeholder     : "Type your message"
                                }}
                                InputLabelProps={{
                                    shrink   : false,
                                    className: classes.bootstrapFormLabel
                                }}
                                onChange={this.onInputChange}
                                value={messageText}
                            />
                            <IconButton className="absolute pin-r pin-t" type="submit">
                                <Icon className="text-24" color="action">send</Icon>
                            </IconButton>
                        </Paper>
                    </form>
                )}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        sendMessage: Actions.sendMessage
    }, dispatch);
}

function mapStateToProps({chatApp})
{
    return {
        contacts         : chatApp.contacts.entities,
        selectedContactId: chatApp.contacts.selectedContactId,
        chat             : chatApp.chat,
        user             : chatApp.user
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Chat));

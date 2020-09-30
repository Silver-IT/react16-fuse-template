import React, {Component} from 'react';
import {Radio, FormControlLabel, RadioGroup, FormLabel, FormControl, IconButton, TextField, AppBar, Icon, Toolbar, Typography, Avatar} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import _ from '@lodash';
import * as Actions from './store/actions';
import StatusIcon from './StatusIcon';

const statusArr = [
    {
        title: 'Online',
        value: 'online'
    },
    {
        title: 'Away',
        value: 'away'
    },
    {
        title: 'Do not disturb',
        value: 'do-not-disturb'
    },
    {
        title: 'Offline',
        value: 'offline'
    }
];

class UserSidebar extends Component {

    constructor(props)
    {
        super(props);
        this.state = this.props.user ? {...this.props.user} : null;
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        if ( this.props.user && !_.isEqual(prevProps.user, this.props.user) && !_.isEqual(this.state, this.props.user) )
        {
            this.setState({...this.props.user});
        }

        if ( this.state && !_.isEqual(this.state, prevState) && !_.isEqual(this.state, this.props.user) )
        {
            this.updateUserData();
        }
    }

    updateUserData = _.debounce(() => {
        this.props.updateUserData(this.state);
    }, 500);

    handleChange = (event) => {
        this.setState(_.set({...this.state}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    };

    render()
    {
        const {user, closeUserSidebar} = this.props;
        return this.state ? (
            <div className="flex flex-col flex-auto h-full">
                <AppBar
                    position="static"
                    color="primary"
                    elevation={1}
                >
                    <Toolbar className="flex justify-between items-center px-16 pr-4">
                        <Typography color="inherit" variant="subtitle1">User Info</Typography>
                        <IconButton onClick={closeUserSidebar} color="inherit">
                            <Icon>close</Icon>
                        </IconButton>
                    </Toolbar>
                    <Toolbar className="flex flex-col justify-center items-center p-24">
                        <Avatar src={user.avatar} alt={user.name} className="w-96 h-96">
                            {(!user.avatar || user.avatar === '') ? user.name[0] : ''}
                        </Avatar>
                        <Typography color="inherit" className="mt-16" variant="h6">{user.name}</Typography>
                    </Toolbar>
                </AppBar>
                <FuseScrollbars className="overflow-y-auto flex-1 p-24">
                    <form>
                        <FormControl component="fieldset" className="w-full mb-16">
                            <TextField
                                label="Mood"
                                name="mood"
                                className="w-full"
                                value={this.state.mood}
                                margin="normal"
                                multiline
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl component="fieldset" className="w-full mb-16">
                            <FormLabel component="legend">Status</FormLabel>
                            <RadioGroup
                                aria-label="Status"
                                name="status"
                                className=""
                                value={this.state.status}
                                onChange={this.handleChange}
                            >
                                {statusArr.map((status) => (
                                    <FormControlLabel
                                        key={status.value}
                                        value={status.value}
                                        control={<Radio/>}
                                        label={(
                                            <div className="flex items-center">
                                                <StatusIcon status={status.value}/>
                                                <span className="ml-8">{status.title}</span>
                                            </div>
                                        )}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </form>
                </FuseScrollbars>
            </div>
        ) : '';
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        closeUserSidebar: Actions.closeUserSidebar,
        updateUserData  : Actions.updateUserData
    }, dispatch);
}

function mapStateToProps({chatApp})
{
    return {
        user: chatApp.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSidebar);

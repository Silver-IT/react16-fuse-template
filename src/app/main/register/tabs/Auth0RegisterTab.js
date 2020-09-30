import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import auth0Service from 'app/services/auth0Service';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import * as Actions from 'app/store/actions';
import * as authActions from 'app/auth/store/actions';

class Auth0RegisterTab extends Component {

    showDialog = () => {
        auth0Service.register();
    };

    componentDidMount()
    {
        this.showDialog();

        auth0Service.onAuthenticated(() => {
            this.props.showMessage({message: 'Logging in with Auth0'});

            auth0Service.getUserData().then(tokenData => {

                this.props.setUserDataAuth0(tokenData);

                this.props.showMessage({message: 'Logged in with Auth0'});
            });
        });
    }

    render()
    {
        return (
            <div className="w-full">
                <Button
                    className="w-full my-48"
                    color="primary"
                    variant="contained"
                    onClick={this.showDialog}
                >
                    Log In/Sign Up with Auth0
                </Button>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
            setUserDataAuth0: authActions.setUserDataAuth0,
            showMessage     : Actions.showMessage
        },
        dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(Auth0RegisterTab));

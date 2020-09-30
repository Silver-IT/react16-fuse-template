import React, {Component} from 'react';
import {withStyles, Button, Card, CardContent, Divider, TextField, Typography} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseCountdown, FuseAnimate} from '@fuse';
import classNames from 'classnames';
import _ from '@lodash';

const styles = theme => ({
    root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color     : theme.palette.primary.contrastText
    }
});

class ComingSoonPage extends Component {

    state = {
        email: ''
    };

    handleChange = (event) => {
        this.setState(_.set({...this.state}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    };

    canBeSubmitted()
    {
        const {email} = this.state;
        return (
            email.length > 0
        );
    }

    render()
    {
        const {classes} = this.props;
        const {email} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

                <div className="flex flex-col items-center justify-center w-full">

                    <FuseAnimate animation="transition.expandIn">

                        <Card className="w-full max-w-384">

                            <CardContent className="flex flex-col items-center justify-center p-32 text-center">

                                <img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo"/>

                                <Typography variant="subtitle1" className="mb-16">
                                    Hey! Thank you for checking out our app.
                                </Typography>

                                <Typography color="textSecondary" className="max-w-288">
                                    It’s not quite ready yet, but we are working hard and it will be ready in approximately:
                                </Typography>

                                <FuseCountdown endDate="2019-07-28" className="my-48"/>

                                <Divider className="w-48"/>

                                <Typography className="font-bold my-32 w-full">
                                    If you would like to be notified when the app is ready, you can subscribe to our e-mail list.
                                </Typography>

                                <form name="subscribeForm" noValidate className="flex flex-col justify-center w-full">

                                    <TextField
                                        className="mb-16"
                                        label="Email"
                                        autoFocus
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        required
                                        fullWidth
                                    />

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className="w-224 mx-auto my-16"
                                        aria-label="Subscribe"
                                        disabled={!this.canBeSubmitted()}
                                    >
                                        SUBSCRIBE
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </FuseAnimate>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ComingSoonPage);

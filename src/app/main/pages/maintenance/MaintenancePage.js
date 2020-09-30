import React from 'react';
import {withStyles, Card, CardContent, Grow, Typography} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color     : theme.palette.primary.contrastText
    }
});

const MaintenancePage = ({classes}) => {
    return (
        <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

            <div className="flex flex-col items-center justify-center w-full">

                <Grow in={true}>
                    <Card className="w-full max-w-384">

                        <CardContent className="flex flex-col items-center justify-center text-center p-48">

                            <img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo"/>

                            <Typography variant="subtitle1" className="mb-16">
                                Closed for scheduled maintenance!
                            </Typography>

                            <Typography color="textSecondary" className="mb-40">
                                We're sorry for the inconvenience. <br/> Please check back later.
                            </Typography>

                        </CardContent>
                    </Card>
                </Grow>
            </div>
        </div>
    );
};

export default withStyles(styles, {withTheme: true})(MaintenancePage);

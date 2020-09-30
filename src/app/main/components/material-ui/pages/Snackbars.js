import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles/index';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const styles = theme => ({
    layoutRoot: {
        '& .description': {
            marginBottom: 16
        }
    }
});

function Snackbars({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Components</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Material UI Elements</Typography>
                        </div>
                        <Typography variant="h6">Snackbars</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui-next.com/demos/snackbars"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Snackbars</Typography>
                    <Typography className="description">Snackbars provide brief messages about app processes through a message - typically at the bottom of the screen</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/snackbars.html">Snackbars</a> inform users of a process that an app
                        has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn’t interrupt the user experience, and they don’t
                        require user input to disappear.</Typography>
                    <Typography className="mb-16" component="div">Snackbars contain a single line of text directly related to the operation performed.
                        They may contain a text action, but no icons. You can use them to display notifications.</Typography>
                    <Typography className="text-16 mt-32 mb-8" component="h4">Frequency</Typography>
                    <Typography className="mb-16" component="div">Only one snackbar may be displayed at a time.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple</Typography>
                    <Typography className="mb-16" component="div">A basic snackbar that aims to reproduce Google Keep&#39;s snackbar behavior.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/snackbars/SimpleSnackbar.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/SimpleSnackbar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized Snackbars</Typography>
                    <Typography className="mb-16" component="div">If you have been reading the <a href="/customization/overrides/">overrides documentation page</a>
                        but you are not confident jumping in,
                        here are examples of how you can change the look of a Snackbar.</Typography>
                    <Typography className="mb-16" component="div">
                        <span role="img" aria-label="unicode-symbol">⚠</span>
                        While the material design specification encourages theming, these examples are off the beaten path.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/snackbars/CustomizedSnackbars.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/CustomizedSnackbars.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Positioned</Typography>
                    <Typography className="mb-16" component="div">There may be circumstances when the placement of the snackbar needs to be more flexible.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/snackbars/PositionedSnackbar.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/PositionedSnackbar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Message Length</Typography>
                    <Typography className="mb-16" component="div">Some snackbars with varying message length.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/snackbars/LongTextSnackbar.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/LongTextSnackbar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Transitions</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Consecutive Snackbars</Typography>
                    <Typography className="mb-16" component="div">Per <a href="https://material.io/design/components/snackbars.html#snackbars-toasts-usage">Google&#39;s
                        guidelines</a>, when a second snackbar is triggered while the first is displayed, the first should start the contraction motion downwards before the second
                        one animates upwards.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/snackbars/ConsecutiveSnackbars.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/ConsecutiveSnackbars.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Don&#39;t block the floating action button</Typography>
                    <Typography className="mb-16" component="div">Move the floating action button vertically to accommodate the snackbar height.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/snackbars/FabIntegrationSnackbar.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/FabIntegrationSnackbar.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Control Direction</Typography>
                    <Typography className="mb-16" component="div">Change the direction of the transition. Slide is the default transition.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/snackbars/DirectionSnackbar.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/DirectionSnackbar.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Change Transition</Typography>
                    <Typography className="mb-16" component="div">Use a different transition all together.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/snackbars/FadeSnackbar.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/FadeSnackbar.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Complementary projects</Typography>
                    <Typography className="mb-16" component="div">For more advanced use cases you might be able to take advantage of:</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">notistack</Typography>
                    <Typography className="mb-16" component="div"><img src="https://img.shields.io/github/stars/iamhosseindhv/notistack.svg?style=social&label=Stars" alt="stars"/>
                        <img src="https://img.shields.io/npm/dm/notistack.svg" alt="npm downloads"/></Typography>
                    <Typography className="mb-16" component="div">In the following example, we demonstrate how to use <a
                        href="https://github.com/iamhosseindhv/notistack">notistack</a>. notistack makes it easy to display snackbars (so you don&#39;t have to deal with open/close
                        state of them). It also enables you to stack them on top of one another.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/snackbars/IntegrationNotistack.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/snackbars/IntegrationNotistack.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Snackbars);

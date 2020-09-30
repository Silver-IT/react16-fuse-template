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

function Badges({classes})
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
                        <Typography variant="h6">Badge</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui-next.com/demos/badges"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Badge</Typography>
                    <Typography className="description">Badge generates a small badge to the top-right of its child(ren).</Typography>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Badges</Typography>
                    <Typography className="mb-16" component="div">Examples of badges containing text, using primary and secondary colors. The badge is applied to its
                        children.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/badges/SimpleBadge.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/badges/SimpleBadge.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Badge visibility</Typography>
                    <Typography className="mb-16" component="div">The visibility of badges can be controlled using the <code>invisible</code> property.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/badges/BadgeVisibility.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/badges/BadgeVisibility.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized Badge</Typography>
                    <Typography className="mb-16" component="div">If you have been reading the <a href="/customization/overrides/">overrides documentation page</a>
                        but you are not confident jumping in,
                        here is one example of how you can change the badge position.</Typography>
                    <Typography className="mb-16" component="div">
                        <span role="img" aria-label="unicode-symbol">⚠</span>
                        While the material design specification encourages theming, this example is off the beaten path.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/badges/CustomizedBadge.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/badges/CustomizedBadge.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Badges);

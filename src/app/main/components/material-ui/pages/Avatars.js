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

function Avatars({classes})
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
                        <Typography variant="h6">Avatars</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui-next.com/demos/avatars"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Avatars</Typography>
                    <Typography className="description">Avatars are found throughout material design with uses in everything from tables to dialog menus.</Typography>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Image avatars</Typography>
                    <Typography className="mb-16" component="div">Image avatars can be created by passing
                        standard <code>img</code> props <code>src</code> or <code>srcSet</code> into the component.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/avatars/ImageAvatars.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/avatars/ImageAvatars.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Letter avatars</Typography>
                    <Typography className="mb-16" component="div">Avatars containing simple characters can be created by passing your string as <code>children</code>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/avatars/LetterAvatars.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/avatars/LetterAvatars.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Icon avatars</Typography>
                    <Typography className="mb-16" component="div">Icon avatars are created by passing an icon as <code>children</code>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/avatars/IconAvatars.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/avatars/IconAvatars.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Avatars);

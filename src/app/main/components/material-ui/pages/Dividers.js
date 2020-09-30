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

function Dividers({classes})
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
                        <Typography variant="h6">Dividers</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui-next.com/demos/dividers"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Dividers</Typography>
                    <Typography className="description">A divider is a thin line that groups content in lists and layouts.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/dividers.html">Dividers</a> separate content into clear
                        groups.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">List Dividers</Typography>
                    <Typography className="mb-16" component="div">The divider renders as a <code>&lt;hr&gt;</code> by default.
                        You can save rendering this DOM element by using the <code>divider</code> property on the <code>ListItem</code> component.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/dividers/ListDividers.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/dividers/ListDividers.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">HTML5 Specification</Typography>
                    <Typography className="mb-16" component="div">We need to make sure the <code>Divider</code> is rendered as a <code>li</code> to match the HTML5 specification.
                        The examples below show two ways of achieving this.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Inset Dividers</Typography>
                    <Typography className="mb-16" component="div">The <code>inset</code> property has now been deprecated. You should now use <code>variant=&quot;inset&quot;</code></Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/dividers/InsetDividers.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/dividers/InsetDividers.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Subheader Dividers</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/dividers/SubheaderDividers.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/dividers/SubheaderDividers.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Middle Dividers</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/dividers/MiddleDividers.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/dividers/MiddleDividers.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Dividers);

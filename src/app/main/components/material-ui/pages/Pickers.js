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

function Pickers({classes})
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
                        <Typography variant="h6">Pickers</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui-next.com/demos/pickers"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Pickers</Typography>
                    <Typography className="description">Pickers provide a simple way to select a single value from a pre-determined set.</Typography>

                    <ul>
                        <li>On mobile, pickers are best suited for display in confirmation dialog.</li>
                        <li>For inline display, such as on a form, consider using compact controls such as segmented dropdown buttons.</li>
                    </ul>
                    <Typography className="text-16 mt-32 mb-8" component="h4">Notice</Typography>
                    <Typography className="mb-16" component="div">We are falling back to <strong>native input controls</strong>.
                        If you are interested in implementing or have implemented a rich Material Design Picker with an awesome UX, please, let us know on <a
                            href="https://github.com/mui-org/material-ui/issues/4787">#4787</a> and <a href="https://github.com/mui-org/material-ui/issues/4796">#4796</a>! We could
                        add <a href="#complementary-projects">a link to or a demo</a> of your project in the documentation.</Typography>
                    <Typography className="mb-16" component="div">
                        <span role="img" aria-label="unicode-symbol">⚠</span>
                        Native input controls support by browsers <a href="https://caniuse.com/#feat=input-datetime">isn&#39;t perfect</a>.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Date pickers</Typography>
                    <Typography className="mb-16" component="div">A native date picker example with <code>type=&quot;date&quot;</code>, it can be used as a calendar
                        too.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/pickers/DatePickers.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/pickers/DatePickers.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Date &amp; Time pickers</Typography>
                    <Typography className="mb-16" component="div">A native date &amp; time picker example with <code>type=&quot;datetime-local&quot;</code>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/pickers/DateAndTimePickers.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/pickers/DateAndTimePickers.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Time pickers</Typography>
                    <Typography className="mb-16" component="div">A native time picker example with <code>type=&quot;time&quot;</code>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/pickers/TimePickers.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/pickers/TimePickers.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Complementary projects</Typography>
                    <Typography className="mb-16" component="div">For more advanced use cases you might be able to take advantage of.</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">material-ui-pickers</Typography>
                    <Typography className="mb-16" component="div"><img src="https://img.shields.io/github/stars/dmtrKovalenko/material-ui-pickers.svg?style=social&label=Stars"
                                                                       alt="stars"/>
                        <img src="https://img.shields.io/npm/dm/material-ui-pickers.svg" alt="npm downloads"/></Typography>
                    <Typography className="mb-16" component="div"><a href="https://material-ui-pickers.firebaseapp.com/">material-ui-pickers</a> provides date and time controls
                        that follow the Material Design spec.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/pickers/MaterialUIPickers.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/pickers/MaterialUIPickers.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Other</Typography>
                    <ul>
                        <li><a href="https://github.com/TeamWertarbyte/material-ui-time-picker">material-ui-time-picker</a>: time pickers.</li>
                        <li><a href="https://github.com/chingyawhao/material-ui-next-pickers">material-ui-next-pickers</a>: date pickers and time pickers.</li>
                    </ul>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Pickers);

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

function SelectionControls({classes})
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
                        <Typography variant="h6">Selection Controls</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui-next.com/demos/selection-controls"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Selection Controls</Typography>
                    <Typography className="description">Selection controls allow the user to select options.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/selection-controls.html">Selection controls</a> allow users to
                        complete tasks that involve making choices such as selecting options, or switching settings on or off. Selection controls are found on screens that ask
                        users to make decisions or declare preferences such as settings or dialogs.</Typography>
                    <Typography className="mb-16" component="div">Three types of selection controls are covered in this section:</Typography>
                    <ul>
                        <li><strong><a href="#radio-buttons">Radio Buttons</a></strong> allow the selection of a single option from a set.</li>
                        <li><strong><a href="#checkboxes">Checkboxes</a></strong> allow the selection of multiple options from a set.</li>
                        <li><strong><a href="#switches">Switches</a></strong> allow a selection to be turned on or off.</li>
                    </ul>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Radio Buttons</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/selection-controls.html#radio-buttons">Radio buttons</a>
                        allow the user to select one option from a set.
                        Use radio buttons when the user needs to see all available options.
                        If available options can be collapsed, consider using a dropdown menu because it uses less space.</Typography>
                    <Typography className="mb-16" component="div">Radio buttons should have the most commonly used option selected by default.</Typography>
                    <Typography className="mb-16" component="div"><code>RadioGroup</code> is a helpful wrapper used to group <code>Radio</code> components that provides an easier
                        API, and proper keyboard accessibility to the group.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/selection-controls/RadioButtonsGroup.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/selection-controls/RadioButtonsGroup.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Standalone Radio Buttons</Typography>
                    <Typography className="mb-16" component="div"><code>Radio</code> can also be used standalone, without the wrapper.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/selection-controls/RadioButtons.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/selection-controls/RadioButtons.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Checkboxes</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/selection-controls.html#checkboxes">Checkboxes</a>
                        allow the user to select one or more items from a set.
                        Checkboxes can be used to turn an option on or off.</Typography>
                    <Typography className="mb-16" component="div">If you have multiple options appearing in a list,
                        you can preserve space by using checkboxes instead of on/off switches.
                        If you have a single option, avoid using a checkbox and use an on/off switch instead.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/selection-controls/Checkboxes.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/selection-controls/Checkboxes.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div"><code>Checkbox</code> can also be used with a label description thanks to
                        the <code>FormControlLabel</code> component.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/selection-controls/CheckboxLabels.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/selection-controls/CheckboxLabels.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Checkboxes with FormGroup</Typography>
                    <Typography className="mb-16" component="div"><code>FormGroup</code> is a helpful wrapper used to group selection controls components that provides an easier
                        API.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/selection-controls/CheckboxesGroup.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/selection-controls/CheckboxesGroup.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Switches</Typography>
                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/selection-controls.html#switches">Switches</a>
                        toggle the state of a single setting on or off.
                        They are the preferred way to adjust settings on mobile.</Typography>
                    <Typography className="mb-16" component="div">The option that the switch controls, as well as the state it’s in,
                        should be made clear from the corresponding inline label.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/selection-controls/Switches.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/selection-controls/Switches.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Switches with FormControlLabel</Typography>
                    <Typography className="mb-16" component="div"><code>Switch</code> can also be used with a label description thanks to
                        the <code>FormControlLabel</code> component.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/selection-controls/SwitchLabels.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/selection-controls/SwitchLabels.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Switches with FormGroup</Typography>
                    <Typography className="mb-16" component="div"><code>FormGroup</code> is a helpful wrapper used to group selection controls components that provides an easier
                        API.
                        However, we encourage you to use a <a href="#checkboxes">Checkbox</a> instead.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/selection-controls/SwitchesGroup.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/selection-controls/SwitchesGroup.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Customized Switches</Typography>
                    <Typography className="mb-16" component="div">If you have been reading the <a href="/customization/overrides/">overrides documentation page</a>
                        but you are not confident jumping in, here&#39;s an example of how you can change the color of a Switch, and an iOS style Switch.</Typography>
                    <Typography className="mb-16" component="div">
                        <span role="img" aria-label="unicode-symbol">⚠</span>
                        While the material design specification encourages theming, these examples are off the beaten path.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/selection-controls/CustomizedSwitches.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/selection-controls/CustomizedSwitches.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Label placement</Typography>
                    <Typography className="mb-16" component="div">You can change the placement of the label:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/selection-controls/FormControlLabelPosition.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/selection-controls/FormControlLabelPosition.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Accessibility</Typography>
                    <Typography className="mb-16" component="div">All form controls should have a label to identify it, this includes radio buttons, checkboxes, and switches. In
                        most cases, this is done by using the <code>&lt;label&gt;</code> element (<a href="/api/form-control-label/">FormControlLabel</a>).</Typography>
                    <Typography className="mb-16" component="div">When a label can&#39;t be used, it&#39;s necessary to add an attribute directly to the input component.
                        In this case, you can apply the additional attribute (e.g. <code>aria-label</code>, <code>aria-labelledby</code>, <code>title</code>) via
                        the <code>inputProps</code> property.</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {`
<Checkbox
  value="checkedA"
  inputProps={{ 'aria-label': 'Checkbox A' } }
/>
`}
                    </FuseHighlight>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(SelectionControls);

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

function Lists({classes})
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
                        <Typography variant="h6">Lists</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui-next.com/demos/lists"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Lists</Typography>
                    <Typography className="description">Lists are continuous, vertical indexes of text or images.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/lists.html">Lists</a> are a continuous group of text or images.
                        They are composed of items containing primary and supplemental actions, which are represented by icons and text.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple List</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/lists/SimpleList.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/lists/SimpleList.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">The last item of the previous demo shows how you can render a link:</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {`
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

//...

<ListItemLink href="#simple-list">
  <ListItemText primary="Spam" />
</ListItemLink>
`}
                    </FuseHighlight>
                    <Typography className="mb-16" component="div">You can find a <a href="/guides/composition/#react-router">demo with React Router following this section</a> of
                        the documentation.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Nested List</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/lists/NestedList.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/lists/NestedList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Folder List</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/lists/FolderList.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/lists/FolderList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Interactive</Typography>
                    <Typography className="mb-16" component="div">Below is an interactive demo that lets you explore the visual results of the different settings:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/lists/InteractiveList.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/lists/InteractiveList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Selected ListItem</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/lists/SelectedListItem.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/lists/SelectedListItem.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Align list items</Typography>
                    <Typography className="mb-16" component="div">You should change the list item alignment when displaying 3 lines or more, set
                        the <code>alignItems=&quot;flex-start&quot;</code> property.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/lists/AlignItemsList.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/lists/AlignItemsList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">List Controls</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Checkbox</Typography>
                    <Typography className="mb-16" component="div">A checkbox can either be a primary action or a secondary action.</Typography>
                    <Typography className="mb-16" component="div">The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary
                        action and a separate target.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/lists/CheckboxList.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/lists/CheckboxList.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">The checkbox is the secondary action for the list item and a separate target.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/lists/CheckboxListSecondary.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/lists/CheckboxListSecondary.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Switch</Typography>
                    <Typography className="mb-16" component="div">The switch is the secondary action and a separate target.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/lists/SwitchListSecondary.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/lists/SwitchListSecondary.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Pinned Subheader List</Typography>
                    <Typography className="mb-16" component="div">Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next
                        subheader.</Typography>
                    <Typography className="mb-16" component="div">This feature is relying on the CSS sticky positioning.
                        Unfortunately it&#39;s <a href="https://caniuse.com/#search=sticky">not implemented</a> by all the browsers we are supporting. We default
                        to <code>disableSticky</code> when not supported.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/lists/PinnedSubheaderList.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/lists/PinnedSubheaderList.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Inset List</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/lists/InsetList.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/lists/InsetList.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Lists);

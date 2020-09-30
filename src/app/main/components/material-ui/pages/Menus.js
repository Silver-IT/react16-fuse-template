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

function Menus({classes})
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
                        <Typography variant="h6">Menus</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui-next.com/demos/menus"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Menus</Typography>
                    <Typography className="description">Menus display a list of choices on temporary surfaces.</Typography>

                    <Typography className="mb-16" component="div">A <a href="https://material.io/design/components/menus.html">Menu</a> displays a list of choices on a temporary
                        surface. They appear when users interact with a button, action, or other control.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Menu</Typography>
                    <Typography className="mb-16" component="div">Simple menus open over the anchor element by default (this option can be changed via props). When close to a
                        screen edge, simple menus vertically realign to make sure that all menu items are completely visible.</Typography>
                    <Typography className="mb-16" component="div">Choosing an option should immediately ideally commit the option and close the menu.</Typography>
                    <Typography className="mb-16" component="div"><strong>Disambiguation</strong>: In contrast to simple menus, simple dialogs can present additional detail related
                        to the options available for a list item or provide navigational or orthogonal actions related to the primary task. Although they can display the same
                        content, simple menus are preferred over simple dialogs because simple menus are less disruptive to the user’s current context.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/menus/SimpleMenu.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/menus/SimpleMenu.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Selected menus</Typography>
                    <Typography className="mb-16" component="div">If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item
                        with the anchor element.
                        The currently selected menu item is set using the <code>selected</code> property (from <a href="/api/list-item/">ListItem</a>).</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/menus/SimpleListMenu.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/menus/SimpleListMenu.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">MenuList composition</Typography>
                    <Typography className="mb-16" component="div">The <code>Menu</code> component uses the <code>Popover</code> component internally.
                        However, you might want to use a different positioning strategy, or not blocking the scroll.
                        For answering those needs, we expose a <code>MenuList</code> component that you can compose, with <code>Popper</code> in this example.</Typography>
                    <Typography className="mb-16" component="div">The primary responsibility of the <code>MenuList</code> component is to handle the focus.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/menus/MenuListComposition.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/menus/MenuListComposition.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized MenuItem</Typography>
                    <Typography className="mb-16" component="div">If you have been reading the <a href="/customization/overrides/">overrides documentation page</a>
                        but you are not confident jumping in,
                        here is one example of how you can customize the <code>MenuItem</code>.</Typography>
                    <Typography className="mb-16" component="div">
                        <span role="img" aria-label="unicode-symbol">⚠</span>
                        While the material design specification encourages theming, this example is off the beaten path.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/menus/ListItemComposition.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/menus/ListItemComposition.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">The <code>MenuItem</code> is a wrapper around <code>ListItem</code> with some additional styles.
                        You can use the same list composition features with the <code>MenuItem</code> component:</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Max height menus</Typography>
                    <Typography className="mb-16" component="div">If the height of a menu prevents all menu items from being displayed, the menu can scroll internally.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/menus/LongMenu.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/menus/LongMenu.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Render Props</Typography>
                    <Typography className="mb-16" component="div">It is a <a href="https://reactjs.org/docs/render-props.html">render props</a> demo that
                        keeps track of the local state for a single menu.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/menus/RenderPropsMenu.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/menus/RenderPropsMenu.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Limitations</Typography>
                    <Typography className="mb-16" component="div">There is <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=327437">a flexbox bug</a> that
                        prevents <code>text-overflow: ellipse</code> from working in a flexbox layout.
                        You can use the <code>Typography</code> component to workaround this issue:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/menus/TypographyMenu.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/menus/TypographyMenu.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Change Transition</Typography>
                    <Typography className="mb-16" component="div">Use a different transition altogether.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/menus/FadeMenu.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/menus/FadeMenu.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Complementary projects</Typography>
                    <Typography className="mb-16" component="div">For more advanced use cases you might be able to take advantage of:</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">PopupState helper</Typography>
                    <Typography className="mb-16" component="div">There is a 3rd party package <a
                        href="https://github.com/jcoreio/material-ui-popup-state"><code>material-ui-popup-state</code></a> that takes care of menu state for you in most
                        cases.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/menus/MenuPopupState.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/menus/MenuPopupState.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Menus);

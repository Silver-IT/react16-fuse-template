import React from 'react';
import {withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import {withStyles} from '@material-ui/core';
import {FuseScrollbars, FuseMessage, FuseDialog} from '@fuse';
import {connect} from 'react-redux';
import ToolbarLayout1 from './components/ToolbarLayout1';
import FooterLayout1 from './components/FooterLayout1';
import LeftSideLayout1 from './components/LeftSideLayout1';
import RightSideLayout1 from './components/RightSideLayout1';
import NavbarWrapperLayout1 from './components/NavbarWrapperLayout1';
import SettingsPanel from 'app/fuse-layouts/shared-components/SettingsPanel';
import classNames from 'classnames';
import AppContext from 'app/AppContext';

const styles = theme => ({
    root          : {
        position          : 'relative',
        display           : 'flex',
        flexDirection     : 'row',
        width             : '100%',
        height            : '100%',
        overflow          : 'hidden',
        backgroundColor   : theme.palette.background.default,
        color             : theme.palette.text.primary,
        '&.boxed'         : {
            maxWidth : 1280,
            margin   : '0 auto',
            boxShadow: theme.shadows[3]
        },
        '&.scroll-body'   : {
            '& $wrapper'       : {
                height  : 'auto',
                flex    : '0 0 auto',
                overflow: 'auto'
            },
            '& $contentWrapper': {},
            '& $content'       : {}
        },
        '&.scroll-content': {
            '& $wrapper'       : {},
            '& $contentWrapper': {},
            '& $content'       : {}
        }
    },
    wrapper       : {
        display : 'flex',
        position: 'relative',
        width   : '100%',
        height  : '100%'
    },
    contentWrapper: {
        display      : 'flex',
        flexDirection: 'column',
        position     : 'relative',
        zIndex       : 3,
        overflow     : 'hidden',
        flex         : '1 1 auto'
    },
    content       : {
        position                    : 'relative',
        display                     : 'flex',
        overflow                    : 'auto',
        flex                        : '1 1 auto',
        flexDirection               : 'column',
        width                       : '100%',
        '-webkit-overflow-scrolling': 'touch',
        zIndex       : 2
    }
});

const Layout1 = ({classes, settings, children}) => {
    // console.warn('FuseLayout:: rendered');
    const layoutConfig = settings.layout.config;

    switch ( layoutConfig.scroll )
    {
        case 'body':
        {
            return (
                <AppContext.Consumer>
                    {({routes}) => (

                        <div id="fuse-layout" className={classNames(classes.root, layoutConfig.mode, 'scroll-' + layoutConfig.scroll)}>

                            {layoutConfig.leftSidePanel.display && (
                                <LeftSideLayout1/>
                            )}

                            <div className="flex flex-1 flex-col overflow-hidden relative">

                                {layoutConfig.toolbar.display && layoutConfig.toolbar.style === 'fixed' && layoutConfig.toolbar.position === 'above' && (
                                    <ToolbarLayout1/>
                                )}

                                <FuseScrollbars className="overflow-auto">

                                    {layoutConfig.toolbar.display && layoutConfig.toolbar.style !== 'fixed' && layoutConfig.toolbar.position === 'above' && (
                                        <ToolbarLayout1/>
                                    )}

                                    <div className={classes.wrapper}>

                                        {layoutConfig.navbar.display && layoutConfig.navbar.position === 'left' && (
                                            <NavbarWrapperLayout1/>
                                        )}

                                        <div className={classes.contentWrapper}>

                                            {layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'below' && (
                                                <ToolbarLayout1/>
                                            )}

                                            <div className={classes.content}>
                                                <FuseDialog/>
                                                {renderRoutes(routes)}
                                                {children}
                                            </div>

                                            {layoutConfig.footer.display && layoutConfig.footer.position === 'below' && (
                                                <FooterLayout1/>
                                            )}

                                            <SettingsPanel/>

                                        </div>

                                        {layoutConfig.navbar.display && layoutConfig.navbar.position === 'right' && (
                                            <NavbarWrapperLayout1/>
                                        )}
                                    </div>

                                    {layoutConfig.footer.display && layoutConfig.footer.style !== 'fixed' && layoutConfig.footer.position === 'above' && (
                                        <FooterLayout1/>
                                    )}

                                </FuseScrollbars>

                                {layoutConfig.footer.display && layoutConfig.footer.style === 'fixed' && layoutConfig.footer.position === 'above' && (
                                    <FooterLayout1/>
                                )}

                            </div>

                            {layoutConfig.rightSidePanel.display && (
                                <RightSideLayout1/>
                            )}

                            <FuseMessage/>

                        </div>
                    )}
                </AppContext.Consumer>
            );
        }
        case 'content':
        default:
        {
            return (
                <AppContext.Consumer>
                    {({routes}) => (
                        <div id="fuse-layout" className={classNames(classes.root, layoutConfig.mode, 'scroll-' + layoutConfig.scroll)}>
                            {layoutConfig.leftSidePanel.display && (
                                <LeftSideLayout1/>
                            )}

                            <div className="flex flex-1 flex-col overflow-hidden relative">

                                {layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'above' && (
                                    <ToolbarLayout1/>
                                )}

                                <div className={classes.wrapper}>

                                    {layoutConfig.navbar.display && layoutConfig.navbar.position === 'left' && (
                                        <NavbarWrapperLayout1/>
                                    )}

                                    <div className={classes.contentWrapper}>
                                        {layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'below' && layoutConfig.toolbar.style === 'fixed' && (
                                            <ToolbarLayout1/>
                                        )}

                                        <FuseScrollbars className={classes.content}>
                                            {layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'below' && layoutConfig.toolbar.style !== 'fixed' && (
                                                <ToolbarLayout1/>
                                            )}

                                            <FuseDialog/>

                                            {renderRoutes(routes)}
                                            {children}

                                            {layoutConfig.footer.display && layoutConfig.footer.position === 'below' && layoutConfig.footer.style !== 'fixed' && (
                                                <FooterLayout1/>
                                            )}
                                        </FuseScrollbars>

                                        {layoutConfig.footer.display && layoutConfig.footer.position === 'below' && layoutConfig.footer.style === 'fixed' && (
                                            <FooterLayout1/>
                                        )}

                                        <SettingsPanel/>

                                    </div>

                                    {layoutConfig.navbar.display && layoutConfig.navbar.position === 'right' && (
                                        <NavbarWrapperLayout1/>
                                    )}
                                </div>

                                {layoutConfig.footer.display && layoutConfig.footer.position === 'above' && (
                                    <FooterLayout1/>
                                )}
                            </div>

                            {layoutConfig.rightSidePanel.display && (
                                <RightSideLayout1/>
                            )}

                            <FuseMessage/>
                        </div>
                    )}
                </AppContext.Consumer>
            );
        }
    }
};

function mapStateToProps({fuse})
{
    return {
        settings: fuse.settings.current
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps)(Layout1)));

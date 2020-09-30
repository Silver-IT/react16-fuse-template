import React from 'react';
import {Drawer, Hidden, MuiThemeProvider, withStyles} from '@material-ui/core';
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import * as Actions from 'app/store/actions';
import connect from 'react-redux/es/connect/connect';
import NavbarLayout1 from './NavbarLayout1';

const navbarWidth = 280;

const styles = theme => ({
    wrapper        : {
        zIndex                      : 4,
        [theme.breakpoints.up('lg')]: {
            width   : navbarWidth,
            minWidth: navbarWidth
        }
    },
    wrapperFolded  : {
        [theme.breakpoints.up('lg')]: {
            width   : 64,
            minWidth: 64
        }
    },
    navbar         : {
        display      : 'flex',
        overflow     : 'hidden',
        flexDirection: 'column',
        width        : navbarWidth,
        minWidth     : navbarWidth,
        height       : '100%',
        zIndex       : 4,
        transition   : theme.transitions.create(['width', 'min-width'], {
            easing  : theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter
        }),
        boxShadow    : theme.shadows[3]
    },
    left           : {
        left: 0
    },
    right          : {
        right: 0
    },
    folded         : {
        position: 'absolute',
        width   : 64,
        minWidth: 64,
        top     : 0,
        bottom  : 0
    },
    foldedAndOpened: {
        width   : navbarWidth,
        minWidth: navbarWidth
    },
    navbarContent  : {},
    foldedAndClosed: {
        '& $navbarContent': {
            '& .logo-icon'                          : {
                width : 32,
                height: 32
            },
            '& .logo-text'                          : {
                opacity: 0
            },
            '& .react-badge'                        : {
                opacity: 0
            },
            '& .list-item-text, & .arrow-icon'      : {
                opacity: 0
            },
            '& .list-subheader .list-subheader-text': {
                opacity: 0
            },
            '& .list-subheader:before'              : {
                content  : '""',
                display  : 'block',
                position : 'absolute',
                minWidth : 16,
                borderTop: '2px solid',
                opacity  : .2
            },
            '& .collapse-children'                  : {
                display: 'none'
            },
            '& .user'                               : {
                '& .username, & .email': {
                    opacity: 0
                },
                '& .avatar'            : {
                    width  : 40,
                    height : 40,
                    top    : 32,
                    padding: 0
                }
            },
            '& .list-item.active'                   : {
                marginLeft  : 12,
                width       : 40,
                padding     : 12,
                borderRadius: 20,
                '&.square'  : {
                    borderRadius: 0,
                    marginLeft  : 0,
                    paddingLeft : 24,
                    width       : '100%'
                }
            }
        }
    }
});

const NavbarWrapperLayout1 = ({classes, children, navbar, settings, navbarTheme, navbarOpenFolded, navbarCloseFolded, navbarCloseMobile}) => {

    const layoutConfig = settings.layout.config;

    const folded = layoutConfig.navbar.folded;
    const foldedAndClosed = folded && !navbar.foldedOpen;
    const foldedAndOpened = folded && navbar.foldedOpen;

    return (
        <MuiThemeProvider theme={navbarTheme}>
            <div id="fuse-navbar"
                 className={
                     classNames(
                         classes.wrapper,
                         folded && classes.wrapperFolded
                     )}
            >
                <Hidden mdDown>
                    <div
                        className={
                            classNames(
                                classes.navbar,
                                classes[layoutConfig.navbar.position],
                                folded && classes.folded,
                                foldedAndOpened && classes.foldedAndOpened,
                                foldedAndClosed && classes.foldedAndClosed
                            )
                        }
                        onMouseEnter={() => foldedAndClosed && navbarOpenFolded()}
                        onMouseLeave={() => foldedAndOpened && navbarCloseFolded()}
                        style={{backgroundColor: navbarTheme.palette.background.default}}
                    >
                        <NavbarLayout1 className={classes.navbarContent}/>
                    </div>
                </Hidden>

                <Hidden lgUp>
                    <Drawer
                        anchor={layoutConfig.navbar.position}
                        variant="temporary"
                        open={navbar.mobileOpen}
                        classes={{
                            paper: classes.navbar
                        }}
                        onClose={navbarCloseMobile}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        <NavbarLayout1 className={classes.navbarContent}/>
                    </Drawer>
                </Hidden>
            </div>
        </MuiThemeProvider>
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        navbarOpenFolded : Actions.navbarOpenFolded,
        navbarCloseFolded: Actions.navbarCloseFolded,
        navbarCloseMobile: Actions.navbarCloseMobile
    }, dispatch);
}

function mapStateToProps({fuse})
{
    return {
        settings   : fuse.settings.current,
        navbarTheme: fuse.settings.navbarTheme,
        navbar     : fuse.navbar
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(NavbarWrapperLayout1));

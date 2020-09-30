import React from 'react';
import {Paper, Drawer, Hidden, MuiThemeProvider, withStyles} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import * as Actions from 'app/store/actions';
import connect from 'react-redux/es/connect/connect';
import classNames from 'classnames';
import NavbarMobileLayout3 from 'app/fuse-layouts/layout3/components/NavbarMobileLayout3';
import NavbarLayout3 from './NavbarLayout3';

const navbarWidth = 280;

const styles = theme => ({
    navbar      : {
        display   : 'flex',
        overflow  : 'hidden',
        height    : 64,
        minHeight : 64,
        alignItems: 'center',
        boxShadow : theme.shadows[3],
        zIndex    : 6
    },
    navbarMobile: {
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
    }
});

const NavbarWrapperLayout3 = ({classes, navbarTheme, children, navbar, navbarOpenFolded, navbarCloseFolded, navbarCloseMobile}) => {
    return (
        <MuiThemeProvider theme={navbarTheme}>

            <Hidden mdDown>
                <Paper className={classNames(classes.navbar)} square={true}>
                    <NavbarLayout3/>
                </Paper>
            </Hidden>

            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    variant="temporary"
                    open={navbar.mobileOpen}
                    classes={{
                        paper: classes.navbarMobile
                    }}
                    onClose={navbarCloseMobile}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                >
                    <NavbarMobileLayout3/>
                </Drawer>
            </Hidden>
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
        navbarTheme: fuse.settings.navbarTheme,
        navbar     : fuse.navbar
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(NavbarWrapperLayout3));

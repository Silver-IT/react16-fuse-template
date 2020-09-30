import React from 'react';
import {withStyles, MuiThemeProvider, Drawer, Hidden} from '@material-ui/core';
import classNames from 'classnames';
import {FuseScrollbars} from '@fuse';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';

const propTypes = {
    leftSidebarHeader  : PropTypes.node,
    leftSidebarContent : PropTypes.node,
    leftSidebarVariant : PropTypes.node,
    rightSidebarHeader : PropTypes.node,
    rightSidebarContent: PropTypes.node,
    rightSidebarVariant: PropTypes.node,
    header             : PropTypes.node,
    content            : PropTypes.node,
    contentToolbar     : PropTypes.node,
    sidebarInner       : PropTypes.bool,
    innerScroll        : PropTypes.bool
};

const defaultProps = {};

const drawerWidth = 240;
const headerHeight = 120;
const toolbarHeight = 64;

const styles = theme => ({
    root                          : {
        display        : 'flex',
        flexDirection  : 'column',
        minHeight      : '100%',
        position       : 'relative',
        flex           : '1 0 auto',
        height         : 'auto',
        backgroundColor: theme.palette.background.default
    },
    innerScroll                   : {
        flex  : '1 1 auto',
        height: '100%'
    },
    contentWrapper                : {
        display        : 'flex',
        flexDirection  : 'row',
        flex           : '1 1 auto',
        zIndex         : 2,
        maxWidth       : '100%',
        minWidth       : 0,
        height         : '100%',
        backgroundColor: theme.palette.background.default
    },
    header                        : {
        height         : headerHeight,
        minHeight      : headerHeight,
        display        : 'flex',
        background     : 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
        color          : theme.palette.primary.contrastText,
        backgroundSize : 'cover',
        backgroundColor: theme.palette.primary.dark
    },
    topBg                         : {
        position     : 'absolute',
        left         : 0,
        right        : 0,
        top          : 0,
        height       : headerHeight,
        pointerEvents: 'none'
    },
    headerSidebarToggleButton     : {
        color: theme.palette.primary.contrastText
    },
    contentCardWrapper            : {
        display : 'flex ',
        flex    : '1 1 auto',
        overflow: 'visible!important',
        minWidth: 0,
        '&.ps'  : {
            overflow: 'visible!important'
        }
    },
    contentCardWrapperInnerSidebar: {
        display                     : 'block',
        overflow                    : 'auto!important',
        '-webkit-overflow-scrolling': 'touch',
        '&.ps'                      : {
            overflow: 'hidden!important'
        },
        '& $contentCard'            : {
            borderRadius: 8
        }
    },
    contentCard                   : {
        display                     : 'flex',
        flexDirection               : 'column',
        flex                        : '1 1 auto',
        overflow                    : 'auto',
        '-webkit-overflow-scrolling': 'touch',
        zIndex                      : 9999
    },
    toolbar                       : {
        height    : toolbarHeight,
        minHeight : toolbarHeight,
        display   : 'flex',
        alignItems: 'center'
    },
    content                       : {
        flex: '1 0 auto'
    },
    sidebarWrapper                : {
        overflow       : 'hidden',
        backgroundColor: 'transparent',
        position       : 'absolute',
        '&.permanent'  : {
            [theme.breakpoints.up('lg')]: {
                position: 'relative'
            }
        }
    },
    sidebar                       : {
        position     : 'absolute',
        '&.permanent': {
            [theme.breakpoints.up('lg')]: {
                backgroundColor: theme.palette.background.default,
                color          : theme.palette.text.primary,
                position       : 'relative'
            }
        },
        width        : drawerWidth,
        height       : '100%'
    },
    leftSidebar                   : {
        [theme.breakpoints.up('lg')]: {
            borderRight: '1px solid ' + theme.palette.divider,
            borderLeft : 0
        }
    },
    rightSidebar                  : {
        [theme.breakpoints.up('lg')]: {
            borderLeft : '1px solid ' + theme.palette.divider,
            borderRight: 0
        }
    },
    sidebarHeader                 : {
        height         : headerHeight,
        minHeight      : headerHeight,
        backgroundColor: theme.palette.primary.dark,
        color          : theme.palette.primary.contrastText
    },
    sidebarHeaderInnerSidebar     : {
        backgroundColor: 'transparent',
        color          : 'inherit',
        height         : 'auto',
        minHeight      : 'auto'
    },
    sidebarContent                : {},
    backdrop                      : {
        position: 'absolute'
    }
});

class FusePageSimple extends React.Component {

    state = {
        leftSidebar : false,
        rightSidebar: false
    };

    componentDidMount()
    {
        if ( this.props.onRef )
        {
            this.props.onRef(this);
        }
    }

    componentWillUnmount()
    {
        if ( this.props.onRef )
        {
            this.props.onRef(undefined)
        }
    }

    handleDrawerToggle = (sidebarId) => {
        this.setState({[sidebarId]: !this.state[sidebarId]});
    };

    toggleLeftSidebar = () => {
        this.handleDrawerToggle('leftSidebar');
    };

    toggleRightSidebar = () => {
        this.handleDrawerToggle('rightSidebar');
    };

    toggleSidebar = (id) => {
        this.handleDrawerToggle(id);
    };

    render()
    {
        const {classes, mainThemeDark, leftSidebarHeader, leftSidebarContent, leftSidebarVariant, rightSidebarHeader, rightSidebarContent, rightSidebarVariant, header, content, contentToolbar, sidebarInner, innerScroll} = this.props;
        const isRightSidebar = rightSidebarHeader || rightSidebarContent;
        const isLeftSidebar = leftSidebarHeader || leftSidebarContent;

        const Sidebar = (header, content, variant) => (
            <FuseScrollbars enable={innerScroll}>
                {header && (
                    <MuiThemeProvider theme={mainThemeDark}>
                        <div className={classNames(classes.sidebarHeader, variant, sidebarInner && classes.sidebarHeaderInnerSidebar)}>
                            {header}
                        </div>
                    </MuiThemeProvider>
                )}

                {content && (
                    <div className={classes.sidebarContent}>
                        {content}
                    </div>
                )}
            </FuseScrollbars>
        );

        const SidebarWrapper = (header, content, sidebarId, variant) => (
                <React.Fragment>
                    <Hidden lgUp={variant === 'permanent'}>
                        <Drawer
                            className={classNames(classes.sidebarWrapper, variant)}
                            variant="temporary"
                            anchor={sidebarId === 'leftSidebar' ? 'left' : 'right'}
                            open={this.state[sidebarId]}
                            onClose={(ev) => this.handleDrawerToggle(sidebarId)}
                            classes={{
                                paper: classNames(classes.sidebar, variant, sidebarId === 'leftSidebar' ? classes.leftSidebar : classes.rightSidebar)
                            }}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}
                            container={this.root}
                            BackdropProps={{
                                classes: {
                                    root: classes.backdrop
                                }
                            }}
                            onClick={(ev) => this.handleDrawerToggle(sidebarId)}
                        >
                            {Sidebar(header, content, variant)}
                        </Drawer>
                    </Hidden>
                    {variant === 'permanent' && (
                        <Hidden mdDown>
                            <Drawer
                                variant="permanent"
                                className={classNames(classes.sidebarWrapper, variant)}
                                open={this.state[sidebarId]}
                                classes={{
                                    paper: classNames(classes.sidebar, variant, sidebarId === 'leftSidebar' ? classes.leftSidebar : classes.rightSidebar)
                                }}
                            >
                                {Sidebar(header, content, variant)}
                            </Drawer>
                        </Hidden>
                    )}
                </React.Fragment>
            )
        ;

        const headerContent = (
            <div className={classes.header}>
                {header && (
                    <MuiThemeProvider theme={mainThemeDark}>
                        {header}
                    </MuiThemeProvider>
                )}
            </div>
        );

        return (
            <div
                className={classNames(classes.root, innerScroll && classes.innerScroll)}
                ref={(root) => {
                    this.root = root;
                }}
            >
                <div className={classNames(classes.header, classes.topBg)}/>

                <div className="flex flex-auto flex-col container z-10">

                    {header && sidebarInner && headerContent}

                    <div className={classes.contentWrapper}>

                        {isLeftSidebar && SidebarWrapper(leftSidebarHeader, leftSidebarContent, 'leftSidebar', leftSidebarVariant || 'permanent')}

                        <FuseScrollbars
                            className={classNames(classes.contentCardWrapper, sidebarInner && classes.contentCardWrapperInnerSidebar)}
                            enable={innerScroll && sidebarInner}
                        >
                            <FuseScrollbars className={classes.contentCard} enable={innerScroll && !sidebarInner}>

                                {header && !sidebarInner && headerContent}

                                {contentToolbar && (
                                    <div className={classes.toolbar}>
                                        {contentToolbar}
                                    </div>
                                )}

                                {content && (
                                    <div className={classes.content}>
                                        {content}
                                    </div>
                                )}
                            </FuseScrollbars>
                        </FuseScrollbars>

                        {isRightSidebar && SidebarWrapper(rightSidebarHeader, rightSidebarContent, 'rightSidebar', rightSidebarVariant || 'permanent')}

                    </div>
                </div>
            </div>
        );
    }
}

FusePageSimple.propTypes = propTypes;
FusePageSimple.defaultProps = defaultProps;

function mapStateToProps({fuse})
{
    return {
        mainThemeDark: fuse.settings.mainThemeDark
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps)(FusePageSimple));

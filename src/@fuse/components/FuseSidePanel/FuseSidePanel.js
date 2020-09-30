import React, {Component} from 'react';
import {withStyles, Paper, Drawer, Icon, IconButton, Fab, Hidden, Tooltip} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import classNames from 'classnames';

const propTypes = {};

const defaultProps = {
    position: "left",
    opened  : true
};

const styles = theme => ({
    paper        : {
        display: 'flex',
        width  : 56
    },
    root         : {
        transition   : theme.transitions.create(['transform', 'width', 'min-width'], {
            easing  : theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter
        }),
        paddingBottom: 64,
        position     : 'relative',
        zIndex       : 999,
        '&.left'     : {
            '& $buttonWrapper': {
                left : 0,
                right: 'auto'
            },
            '& $buttonIcon'   : {
                transform: 'rotate(0deg)'
            }
        },
        '&.right'    : {
            '& $buttonWrapper': {
                right: 0,
                left : 'auto'
            },
            '& $buttonIcon'   : {
                transform: 'rotate(-180deg)'
            }
        },
        '&.closed'   : {
            [theme.breakpoints.up('lg')]: {
                width: 0
            },
            '&.left'                    : {
                '& $buttonWrapper': {
                    justifyContent: 'start'
                },
                '& $button'       : {
                    borderBottomLeftRadius: 0,
                    borderTopLeftRadius   : 0,
                    paddingLeft           : 4
                },
                '& $buttonIcon'   : {
                    transform: 'rotate(-180deg)'
                }
            },
            '&.right'                   : {
                '& $buttonWrapper': {
                    justifyContent: 'flex-end'
                },
                '& $button'       : {
                    borderBottomRightRadius: 0,
                    borderTopRightRadius   : 0,
                    paddingRight           : 4
                },
                '& $buttonIcon'   : {
                    transform: 'rotate(0deg)'
                }
            },
            '& $buttonWrapper'          : {
                width: 'auto'
            },
            '& $button'                 : {
                backgroundColor: theme.palette.background.paper,
                borderRadius   : 38,
                transition     : theme.transitions.create(['background-color', 'border-radius', 'width', 'min-width', 'padding'], {
                    easing  : theme.transitions.easing.easeInOut,
                    duration: theme.transitions.duration.shorter
                }),
                width          : 24,
                '&:hover'      : {
                    width       : 52,
                    paddingLeft : 8,
                    paddingRight: 8
                }
            },
            '& $content'                : {
                opacity: 0
            }
        }
    },
    content      : {
        overflow  : 'hidden',
        opacity   : 1,
        transition: theme.transitions.create(['opacity'], {
            easing  : theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.short
        })
    },
    buttonWrapper: {
        position      : 'absolute',
        bottom        : 0,
        left          : 0,
        display       : 'flex',
        alignItems    : 'center',
        justifyContent: 'center',
        padding       : '12px 0',
        width         : '100%',
        minWidth      : 56
    },
    button       : {
        padding: 8,
        width  : 40,
        height : 40
    },
    buttonIcon   : {
        transition: theme.transitions.create(['transform'], {
            easing  : theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.short
        })
    },
    mobileButton : {
        height         : 40,
        position       : 'absolute',
        zIndex         : 99,
        bottom         : 12,
        width          : 24,
        borderRadius   : 38,
        padding        : 8,
        backgroundColor: theme.palette.background.paper,
        transition     : theme.transitions.create(['background-color', 'border-radius', 'width', 'min-width', 'padding'], {
            easing  : theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter
        }),
        '&:hover'      : {
            width       : 52,
            paddingLeft : 8,
            paddingRight: 8
        },
        '&.left'       : {
            borderBottomLeftRadius: 0,
            borderTopLeftRadius   : 0,
            paddingLeft           : 4,
            left                  : 0
        },

        '&.right': {
            borderBottomRightRadius: 0,
            borderTopRightRadius   : 0,
            paddingRight           : 4,
            right                  : 0,
            '& $buttonIcon'        : {
                transform: 'rotate(-180deg)'
            }
        }
    }
});

class FuseSidePanel extends Component {

    state = {
        opened    : this.props.opened,
        mobileOpen: false
    };

    toggleOpened = () => {
        this.setState({opened: !this.state.opened})
    };

    toggleMobileDrawer = () => {
        this.setState({mobileOpen: !this.state.mobileOpen})
    };

    render()
    {
        const {classes, position, children, className} = this.props;
        const {opened} = this.state;

        return (
            <React.Fragment>
                <Hidden mdDown>
                    <Paper
                        className={classNames(classes.root, classes.paper, className, opened ? "opened" : "closed", position)}
                        elevation={3}
                        square={true}
                    >
                        <FuseScrollbars className={classNames("content", classes.content)}>
                            {children}
                        </FuseScrollbars>

                        <div className={classes.buttonWrapper}>
                            <Tooltip title="Toggle side panel" placement={position === "left" ? "right" : "right"}>
                                <IconButton
                                    className={classes.button}
                                    onClick={this.toggleOpened}
                                    disableRipple
                                >
                                    <Icon className={classes.buttonIcon}>keyboard_arrow_left</Icon>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </Paper>
                </Hidden>
                <Hidden lgUp>
                    <Drawer
                        classes={{
                            paper: classNames(classes.paper, className)
                        }}
                        anchor={position}
                        open={this.state.mobileOpen}
                        onClose={this.toggleMobileDrawer}
                    >
                        <FuseScrollbars className={classNames("content", classes.content)}>
                            {children}
                        </FuseScrollbars>
                    </Drawer>

                    <Tooltip title="Hide side panel" placement={position === "left" ? "right" : "right"}>
                        <Fab
                            className={classNames(classes.mobileButton, position)}
                            onClick={this.toggleMobileDrawer}
                            disableRipple
                        >
                            <Icon className={classes.buttonIcon} color="action">keyboard_arrow_right</Icon>
                        </Fab>
                    </Tooltip>
                </Hidden>
            </React.Fragment>
        );
    }
}

FuseSidePanel.propTypes = propTypes;
FuseSidePanel.defaultProps = defaultProps;

export default withStyles(styles)(FuseSidePanel);

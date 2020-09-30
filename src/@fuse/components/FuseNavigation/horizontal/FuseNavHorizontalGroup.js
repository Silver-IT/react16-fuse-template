import React, {Component} from 'react';
import {withStyles, Grow, Paper, Icon, IconButton, ListItem, ListItemText} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Manager, Reference, Popper} from 'react-popper';
import _ from '@lodash';
import * as ReactDOM from 'react-dom';
import FuseNavHorizontalCollapse from './FuseNavHorizontalCollapse';
import FuseNavHorizontalItem from './FuseNavHorizontalItem';

const propTypes = {
    item: PropTypes.shape(
        {
            id      : PropTypes.string.isRequired,
            title   : PropTypes.string,
            children: PropTypes.array
        })
};

const defaultProps = {};

const styles = theme => ({
    root       : {
        '& .list-item-text': {
            padding: '0 0 0 16px'
        },
        '&.level-0'        : {
            height      : 48,
            borderRadius: 4
        },
        '&.dense'          : {
            padding            : '8px 12px 8px 12px',
            minHeight          : 40,
            '&.level-0'        : {
                height: 44
            },
            '& .list-item-text': {
                padding: '0 0 0 8px'
            }
        }
    },
    children   : {},
    popper     : {
        zIndex: 999
    },
    popperClose: {
        pointerEvents: 'none'
    }
});

class FuseNavHorizontalGroup extends Component {

    state = {
        open: false
    };

    handleToggle = _.debounce((open) => {
        if ( this.state.open === open )
        {
            return;
        }
        this.setState({open});
    }, 150);

    render()
    {
        const {item, nestedLevel, userRole, classes, dense} = this.props;
        const {open} = this.state;

        if ( item.auth && (!item.auth.includes(userRole) || (userRole !== 'guest' && item.auth.length === 1 && item.auth.includes('guest'))) )
        {
            return null;
        }

        return (
            <Manager>
                <Reference>
                    {({ref}) => (
                        <div ref={ref}>
                            <ListItem
                                button
                                className={classNames("list-item ", classes.root, "relative", "level-" + nestedLevel, dense && "dense")}
                                onMouseEnter={() => this.handleToggle(true)}
                                onMouseLeave={() => this.handleToggle(false)}
                                aria-owns={open ? 'menu-list-grow' : null}
                                aria-haspopup="true"
                            >
                                {item.icon && (
                                    <Icon color="action" className="text-16 flex-no-shrink">{item.icon}</Icon>
                                )}
                                <ListItemText className="list-item-text" primary={item.title} classes={{primary: 'text-14'}}/>
                                {nestedLevel > 0 && (
                                    <IconButton disableRipple className="w-16 h-16 ml-4 p-0">
                                        <Icon className="text-16 arrow-icon">keyboard_arrow_right</Icon>
                                    </IconButton>
                                )}
                            </ListItem>
                        </div>
                    )}
                </Reference>
                {ReactDOM.createPortal(
                    <Popper
                        placement={nestedLevel === 0 ? "bottom-start" : "right"}
                        eventsEnabled={open}
                        positionFixed
                    >
                        {({ref, style, placement, arrowProps}) => (
                            <div
                                ref={ref}
                                style={{
                                    ...style,
                                    zIndex: 999 + nestedLevel
                                }}
                                data-placement={placement}
                                className={classNames(classes.popper, {[classes.popperClose]: !open})}
                            >
                                <Grow in={open} id="menu-list-grow" style={{transformOrigin: '0 0 0'}}>
                                    <Paper
                                        onMouseEnter={() => this.handleToggle(true)}
                                        onMouseLeave={() => this.handleToggle(false)}
                                    >
                                        {item.children && (
                                            <ul className={classNames(classes.children, "pl-0")}>
                                                {
                                                    item.children.map((item) => (
                                                        <React.Fragment key={item.id}>

                                                            {item.type === 'group' && (
                                                                <NavHorizontalGroup item={item} nestedLevel={nestedLevel} dense={dense}/>
                                                            )}

                                                            {item.type === 'collapse' && (
                                                                <FuseNavHorizontalCollapse item={item} nestedLevel={nestedLevel} dense={dense}/>
                                                            )}

                                                            {item.type === 'item' && (
                                                                <FuseNavHorizontalItem item={item} nestedLevel={nestedLevel} dense={dense}/>
                                                            )}
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </ul>
                                        )}
                                    </Paper>
                                </Grow>
                            </div>
                        )}
                    </Popper>,
                    document.querySelector('#root')
                )}
            </Manager>
        );
    }
}

function mapStateToProps({auth})
{
    return {
        userRole: auth.user.role
    }
}

FuseNavHorizontalGroup.propTypes = propTypes;
FuseNavHorizontalGroup.defaultProps = defaultProps;

const NavHorizontalGroup = withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps)(FuseNavHorizontalGroup)));

export default NavHorizontalGroup;

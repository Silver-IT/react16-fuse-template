import React from 'react';
import {Divider, List, Hidden} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FuseNavVerticalGroup from './vertical/FuseNavVerticalGroup';
import FuseNavVerticalCollapse from './vertical/FuseNavVerticalCollapse';
import FuseNavVerticalItem from './vertical/FuseNavVerticalItem';
import FuseNavHorizontalGroup from './horizontal/FuseNavHorizontalGroup';
import FuseNavHorizontalCollapse from './horizontal/FuseNavHorizontalCollapse';
import FuseNavHorizontalItem from './horizontal/FuseNavHorizontalItem';

const propTypes = {
    navigation: PropTypes.array.isRequired
};

const defaultProps = {
    layout: "vertical"
};

const FuseNavigation = ({navigation, layout, active, dense, className}) => {

    const verticalNav = (
        <List className={classNames("navigation whitespace-no-wrap", className)}>
            {
                navigation.map((item) => (

                    <React.Fragment key={item.id}>

                        {item.type === 'group' && (
                            <FuseNavVerticalGroup item={item} nestedLevel={0} active={active} dense={dense}/>
                        )}

                        {item.type === 'collapse' && (
                            <FuseNavVerticalCollapse item={item} nestedLevel={0} active={active} dense={dense}/>
                        )}

                        {item.type === 'item' && (
                            <FuseNavVerticalItem item={item} nestedLevel={0} active={active} dense={dense}/>
                        )}

                        {item.type === 'divider' && (
                            <Divider className="my-16"/>
                        )}
                    </React.Fragment>
                ))
            }
        </List>
    );

    const horizontalNav = (
        <List className={classNames("navigation whitespace-no-wrap flex p-0", className)}>
            {
                navigation.map((item) => (

                    <React.Fragment key={item.id}>

                        {item.type === 'group' && (
                            <FuseNavHorizontalGroup item={item} nestedLevel={0} dense={dense}/>
                        )}

                        {item.type === 'collapse' && (
                            <FuseNavHorizontalCollapse item={item} nestedLevel={0} dense={dense}/>
                        )}

                        {item.type === 'item' && (
                            <FuseNavHorizontalItem item={item} nestedLevel={0} dense={dense}/>
                        )}

                        {item.type === 'divider' && (
                            <Divider className="my-16"/>
                        )}
                    </React.Fragment>
                ))
            }
        </List>
    );

    if ( navigation.length > 0 )
    {
        switch ( layout )
        {
            case 'horizontal':
            {
                return (
                    <React.Fragment>
                        <Hidden lgUp>
                            {verticalNav}
                        </Hidden>
                        <Hidden mdDown>
                            {horizontalNav}
                        </Hidden>
                    </React.Fragment>
                )
            }
            case 'vertical':
            default:
            {
                return verticalNav;
            }
        }
    }
    else
    {
        return null;
    }
};

FuseNavigation.propTypes = propTypes;
FuseNavigation.defaultProps = defaultProps;

export default withRouter(FuseNavigation);

import React, {Component} from 'react';
import {withStyles, Button, Icon, Typography} from '@material-ui/core';
import {FusePageSimple, FuseHighlight} from '@fuse';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from 'app/auth/store/actions';

const styles = theme => ({
    layoutRoot: {}
});

class AdminRoleExample extends Component {

    render()
    {
        const {classes, logout} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-1 items-center justify-between p-24">
                        <Typography className="h2">Admin: Auth role example page</Typography>
                        <Button
                            className="normal-case"
                            variant="contained"
                            onClick={logout}
                        >
                            <Icon className="mr-4">exit_to_app</Icon>
                            Logout
                        </Button>
                    </div>
                }
                content={
                    <div className="p-24">
                        <Typography className="mb-24">
                            You can see this page because you have logged in and have permission. Otherwise you should be redirected to login page.
                        </Typography>

                        <Typography className="mb-24">
                            This is the page's config file:
                        </Typography>

                        <FuseHighlight component="pre" className="language-js">
                            {`
                            import {authRoles} from 'auth';
                            import AdminRoleExample from 'app/main/auth/admin-role-example/AdminRoleExample';

                            export const AdminRoleExampleConfig = {
                                settings: {
                                    layout: {
                                        config: {}
                                    }
                                },
                                auth    : authRoles.admin,//['admin']
                                routes  : [
                                    {
                                        path     : '/auth/admin-role-example',
                                        component: AdminRoleExample
                                    }
                                ]
                            };
                            `}
                        </FuseHighlight>

                        <Typography className="my-24">
                            You can also hide the navigation item/collapse/group with user roles by giving auth property.
                        </Typography>

                        <FuseHighlight component="pre" className="language-json">
                            {`
                                export const fuseNavigationConfig = [
                                   {
                                        'id'   : 'only-admin-navigation-item',
                                        'title': 'Nav item only for Admin',
                                        'type' : 'item',
                                        'auth' : authRoles.admin,//['admin']
                                        'url'  : '/auth/admin-role-example',
                                        'icon' : 'verified_user'
                                    }
                                ];
                            `}
                        </FuseHighlight>
                    </div>
                }
            />
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        logout: authActions.logoutUser
    }, dispatch);
}

function mapStateToProps({auth})
{
    return {
        user: auth.user
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(AdminRoleExample));

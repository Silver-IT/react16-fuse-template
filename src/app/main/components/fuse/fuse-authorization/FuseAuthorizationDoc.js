import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FuseHighlight, FusePageSimple} from '@fuse';
/* eslint import/no-webpack-loader-syntax: off */

const FuseAuthorizationDoc = () => {
    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Components</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Fuse Components</Typography>
                        </div>
                        <Typography variant="h6">FuseAuthorization</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        <code>FuseAuthorization</code> is authorization component of the Fuse React. It allows to restrict routes based on user roles. It
                        should wraps the FuseTheme component.
                    </Typography>

                    <Typography className="mb-16" component="p">
                        <code>src/app/App.js</code>
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {require('!raw-loader!app/App.js')}
                    </FuseHighlight>

                    <Typography className="mt-32 mb-8" variant="h5">Configuration</Typography>

                    <Typography className="mb-16" component="p">
                        You can define authorization roles in route config files.
                    </Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {`
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

                    <Typography className="mb-16 mt-32" component="p">
                        You can also hide navigation item/group/collapse by adding <b>auth</b> property in <code>src/app/fuse-configs/NavigationConfig.js</code>.
                    </Typography>

                    <FuseHighlight component="pre" className="language-js">
                        {`
                                  {
                                    'id'   : 'only-admin-navigation-item',
                                    'title': 'Nav item only for Admin',
                                    'type' : 'item',
                                    'auth' : authRoles.admin,
                                    'url'  : '/auth/admin-role-example',
                                    'icon' : 'verified_user'
                                  },
                            `}
                    </FuseHighlight>

                    <Typography id="auth-protected-app" className="mt-32 mb-8" variant="h5">On RoutesConfig.js file</Typography>

                    <Typography className="mb-16 mt-32" component="p">
                        If you don't want to set auth on every page config;
                        <br/>You can group the configs and define authorization the <code>src/app/fuse-configs/RoutesConfig.js</code> file,
                        <br/>With this configuration below makes <b>whole app</b> auth protected:
                    </Typography>

                    <FuseHighlight component="pre" className="language-js">
                        {`
                                    import React from 'react';
                                    import {Redirect} from 'react-router-dom';
                                    import {FuseUtils} from '@fuse/index';
                                    import {appsConfigs} from 'app/main/apps/appsConfigs';
                                    import {pagesConfigs} from 'app/main/pages/pagesConfigs';
                                    import {authRoleExamplesConfigs} from 'app/main/auth/authRoleExamplesConfigs';
                                    import {UserInterfaceConfig} from 'app/main/user-interface/UserInterfaceConfig';
                                    import {ComponentsConfig} from 'app/main/components/ComponentsConfig';
                                    import {DocumentationConfig} from 'app/main/documentation/DocumentationConfig';
                                    import {LoginConfig} from 'app/main/login/LoginConfig';
                                    import {RegisterConfig} from 'app/main/register/RegisterConfig';
                                    import {LogoutConfig} from 'app/main/logout/LogoutConfig';
                                    import {CallbackConfig} from 'app/main/callback/CallbackConfig';
                                    import {authRoles} from 'app/auth';
                                    import _ from 'lodash';

                                    function setAdminAuth(configs)
                                    {
                                        return configs.map(config => _.merge({}, config, {auth: authRoles.admin}))
                                    }

                                    const routeConfigs = [
                                        ...setAdminAuth([
                                            ...appsConfigs,
                                            ...pagesConfigs,
                                            ...authRoleExamplesConfigs,
                                            ComponentsConfig,
                                            UserInterfaceConfig,
                                            DocumentationConfig,
                                            LogoutConfig,
                                            CallbackConfig
                                        ]),
                                        LoginConfig,
                                        RegisterConfig,
                                        CallbackConfig
                                    ];

                                    const routes = [
                                        ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
                                        {
                                            path     : '/',
                                            component: () => <Redirect to="/apps/dashboards/analytics"/>
                                        },
                                        {
                                            exact    : true,
                                            component: () => <Redirect to="/pages/errors/error-404"/>
                                        }
                                    ];

                                    export default routes;


                            `}
                    </FuseHighlight>

                </div>
            }
        />
    );
};

export default FuseAuthorizationDoc;

import {FuseLoadable} from '@fuse';
import {AuthenticationDocRoutes} from './authentication/AuthenticationDocRoutes';
import {GettingStartedDocRoutes} from './getting-started/GettingStartedDocRoutes';
import {WorkingWithFuseReactDocRoutes} from './working-with-fuse-react/WorkingWithFuseReactDocRoutes';

export const DocumentationConfig = {
    routes: [
        {
            path     : '/documentation/changelog',
            component: FuseLoadable({
                loader: () => import('./changelog/ChangelogDoc')
            })
        },
        ...GettingStartedDocRoutes,
        ...WorkingWithFuseReactDocRoutes,
        ...AuthenticationDocRoutes
    ]
};


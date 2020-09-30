import {FuseLoadable} from '@fuse';

export const WorkingWithFuseReactDocRoutes = [
    {
        path     : '/documentation/working-with-fuse-react/development',
        component: FuseLoadable({
            loader: () => import('./development/DevelopmentDoc')
        })
    },
    {
        path     : '/documentation/working-with-fuse-react/production',
        component: FuseLoadable({
            loader: () => import('./production/ProductionDoc')
        })
    },
    {
        path     : '/documentation/working-with-fuse-react/project-structure',
        component: FuseLoadable({
            loader: () => import('./project-structure/ProjectStructureDoc')
        })
    },
    {
        path     : '/documentation/working-with-fuse-react/updating-fuse-react',
        component: FuseLoadable({
            loader: () => import('./updating-fuse-react/UpdatingFuseReactDoc')
        })
    },
    {
        path     : '/documentation/working-with-fuse-react/theming',
        component: FuseLoadable({
            loader: () => import('./theming/ThemingDoc')
        })
    },
    {
        path     : '/documentation/working-with-fuse-react/theme-layouts',
        component: FuseLoadable({
            loader: () => import('./theme-layouts/ThemeLayoutsDoc')
        })
    },
    {
        path     : '/documentation/working-with-fuse-react/page-layouts',
        component: FuseLoadable({
            loader: () => import('./page-layouts/PageLayoutsDoc')
        })
    },
    {
        path     : '/documentation/working-with-fuse-react/settings',
        component: FuseLoadable({
            loader: () => import('./settings/SettingsDoc')
        })
    },
    {
        path     : '/documentation/working-with-fuse-react/routing',
        component: FuseLoadable({
            loader: () => import('./routing/RoutingDoc')
        })
    },
    {
        path     : '/documentation/working-with-fuse-react/code-splitting',
        component: FuseLoadable({
            loader: () => import('./code-splitting/CodeSplittingDoc')
        })
    }
];

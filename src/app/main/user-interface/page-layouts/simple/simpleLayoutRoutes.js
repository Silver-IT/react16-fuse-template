import {FuseLoadable} from '@fuse';

export const simpleLayoutRoutes = [
    {
        path     : '/ui/page-layouts/simple/full-width',
        component: FuseLoadable({
            loader: () => import('./full-width')
        })
    },
    {
        path     : '/ui/page-layouts/simple/left-sidebar',
        component: FuseLoadable({
            loader: () => import('./left-sidebar')
        })
    },
    {
        path     : '/ui/page-layouts/simple/left-sidebar-2',
        component: FuseLoadable({
            loader: () => import('./left-sidebar-2')
        })
    },
    {
        path     : '/ui/page-layouts/simple/left-sidebar-3',
        component: FuseLoadable({
            loader: () => import('./left-sidebar-3')
        })
    },
    {
        path     : '/ui/page-layouts/simple/right-sidebar',
        component: FuseLoadable({
            loader: () => import('./right-sidebar')
        })
    },
    {
        path     : '/ui/page-layouts/simple/right-sidebar-2',
        component: FuseLoadable({
            loader: () => import('./right-sidebar-2')
        })
    },
    {
        path     : '/ui/page-layouts/simple/right-sidebar-3',
        component: FuseLoadable({
            loader: () => import('./right-sidebar-3')
        })
    },
    {
        path     : '/ui/page-layouts/simple/tabbed',
        component: FuseLoadable({
            loader: () => import('./tabbed')
        })
    }
];

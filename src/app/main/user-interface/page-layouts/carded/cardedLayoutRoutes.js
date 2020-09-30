import {FuseLoadable} from '@fuse';

export const cardedLayoutRoutes = [
    {
        path     : '/ui/page-layouts/carded/full-width',
        component: FuseLoadable({
            loader: () => import('./full-width')
        })
    },
    {
        path     : '/ui/page-layouts/carded/full-width-tabbed',
        component: FuseLoadable({
            loader: () => import('./full-width-tabbed')
        })
    },
    {
        path     : '/ui/page-layouts/carded/full-width-2',
        component: FuseLoadable({
            loader: () => import('./full-width-2')
        })
    },
    {
        path     : '/ui/page-layouts/carded/full-width-2-tabbed',
        component: FuseLoadable({
            loader: () => import('./full-width-2-tabbed')
        })
    },
    {
        path     : '/ui/page-layouts/carded/left-sidebar',
        component: FuseLoadable({
            loader: () => import('./left-sidebar')
        })
    },
    {
        path     : '/ui/page-layouts/carded/left-sidebar-tabbed',
        component: FuseLoadable({
            loader: () => import('./left-sidebar-tabbed')
        })
    },
    {
        path     : '/ui/page-layouts/carded/left-sidebar-2',
        component: FuseLoadable({
            loader: () => import('./left-sidebar-2')
        })
    },
    {
        path     : '/ui/page-layouts/carded/left-sidebar-2-tabbed',
        component: FuseLoadable({
            loader: () => import('./left-sidebar-2-tabbed')
        })
    },
    {
        path     : '/ui/page-layouts/carded/right-sidebar',
        component: FuseLoadable({
            loader: () => import('./right-sidebar')
        })
    },
    {
        path     : '/ui/page-layouts/carded/right-sidebar-tabbed',
        component: FuseLoadable({
            loader: () => import('./right-sidebar-tabbed')
        })
    },
    {
        path     : '/ui/page-layouts/carded/right-sidebar-2',
        component: FuseLoadable({
            loader: () => import('./right-sidebar-2')
        })
    },
    {
        path     : '/ui/page-layouts/carded/right-sidebar-2-tabbed',
        component: FuseLoadable({
            loader: () => import('./right-sidebar-2-tabbed')
        })
    }
];

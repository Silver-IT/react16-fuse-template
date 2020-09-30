import {FuseLoadable} from '@fuse';

export const FuseComponentsRoutes = [
    {
        path     : '/components/fuse/fuse-theme',
        component: FuseLoadable({
            loader: () => import('./fuse-theme/FuseThemeDoc')
        })
    },
    {
        path     : '/components/fuse/fuse-authorization',
        component: FuseLoadable({
            loader: () => import('./fuse-authorization/FuseAuthorizationDoc')
        })
    },
    {
        path     : '/components/fuse/fuse-layout',
        component: FuseLoadable({
            loader: () => import('./fuse-layout/FuseLayoutDoc')
        })
    },
    {
        path     : '/components/fuse/fuse-page-carded',
        component: FuseLoadable({
            loader: () => import('./fuse-page-carded/FusePageCardedDoc')
        })
    },
    {
        path     : '/components/fuse/fuse-page-simple',
        component: FuseLoadable({
            loader: () => import('./fuse-page-simple/FusePageSimpleDoc')
        })
    },
    {
        path     : '/components/fuse/fuse-scrollbars',
        component: FuseLoadable({
            loader: () => import('./fuse-scrollbars/FuseScrollbarsDoc')
        })
    },
    {
        path     : '/components/fuse/fuse-highlight',
        component: FuseLoadable({
            loader: () => import('./fuse-highlight/FuseHighlightDoc')
        })
    },
    {
        path     : '/components/fuse/fuse-countdown',
        component: FuseLoadable({
            loader: () => import('./fuse-countdown/FuseCountdownDoc')
        })
    },
    {
        path     : '/components/fuse/fuse-navigation',
        component: FuseLoadable({
            loader: () => import('./fuse-navigation/FuseNavigationDoc')
        })
    },
    {
        path     : '/components/fuse/fuse-message',
        component: FuseLoadable({
            loader: () => import('./fuse-message/FuseMessageDoc')
        })
    },
    {
        path     : '/components/fuse/fuse-dialog',
        component: FuseLoadable({
            loader: () => import('./fuse-dialog/FuseDialogDoc')
        })
    },
    {
        path     : '/components/fuse/fuse-animate',
        component: FuseLoadable({
            loader: () => import('./fuse-animate/FuseAnimateDoc')
        })
    },
    {
        path     : '/components/fuse/fuse-animate-group',
        component: FuseLoadable({
            loader: () => import('./fuse-animate-group/FuseAnimateGroupDoc')
        })
    },
    {
        path     : '/components/fuse/fuse-chip-select',
        component: FuseLoadable({
            loader: () => import('./fuse-chip-select/FuseChipSelectDoc')
        })
    }
];

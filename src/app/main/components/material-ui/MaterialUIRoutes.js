import {
    FuseLoadable
} from '@fuse';

export const MaterialUIRoutes = [{
    path: '/components/material-ui/app-bar',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/AppBar')
    })
}, {
    path: '/components/material-ui/autocomplete',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Autocomplete')
    })
}, {
    path: '/components/material-ui/avatars',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Avatars')
    })
}, {
    path: '/components/material-ui/badges',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Badges')
    })
}, {
    path: '/components/material-ui/bottom-navigation',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/BottomNavigation')
    })
}, {
    path: '/components/material-ui/buttons',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Buttons')
    })
}, {
    path: '/components/material-ui/cards',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Cards')
    })
}, {
    path: '/components/material-ui/chips',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Chips')
    })
}, {
    path: '/components/material-ui/dialogs',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Dialogs')
    })
}, {
    path: '/components/material-ui/dividers',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Dividers')
    })
}, {
    path: '/components/material-ui/drawers',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Drawers')
    })
}, {
    path: '/components/material-ui/expansion-panels',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/ExpansionPanels')
    })
}, {
    path: '/components/material-ui/grid-list',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/GridList')
    })
}, {
    path: '/components/material-ui/lists',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Lists')
    })
}, {
    path: '/components/material-ui/menus',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Menus')
    })
}, {
    path: '/components/material-ui/paper',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Paper')
    })
}, {
    path: '/components/material-ui/pickers',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Pickers')
    })
}, {
    path: '/components/material-ui/progress',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Progress')
    })
}, {
    path: '/components/material-ui/selection-controls',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/SelectionControls')
    })
}, {
    path: '/components/material-ui/selects',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Selects')
    })
}, {
    path: '/components/material-ui/snackbars',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Snackbars')
    })
}, {
    path: '/components/material-ui/steppers',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Steppers')
    })
}, {
    path: '/components/material-ui/tables',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Tables')
    })
}, {
    path: '/components/material-ui/tabs',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Tabs')
    })
}, {
    path: '/components/material-ui/text-fields',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/TextFields')
    })
}, {
    path: '/components/material-ui/tooltips',
    component: FuseLoadable({
        loader: () => import('app/main/components/material-ui/pages/Tooltips')
    })
}];
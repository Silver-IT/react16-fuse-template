import {cardedLayoutRoutes} from './page-layouts/carded/cardedLayoutRoutes';
import {simpleLayoutRoutes} from './page-layouts/simple/simpleLayoutRoutes';
import {FuseLoadable} from '@fuse';

export const UserInterfaceConfig = {

    routes: [
        ...cardedLayoutRoutes,
        ...simpleLayoutRoutes,
        {
            path     : '/ui/page-layouts/blank',
            component: FuseLoadable({
                loader: () => import('./page-layouts/blank')
            })
        },
        {
            path     : '/ui/icons',
            component: FuseLoadable({
                loader: () => import('./icons/IconsUI')
            })
        },
        {
            path     : '/ui/typography',
            component: FuseLoadable({
                loader: () => import('./typography/TypographyUI')
            })
        },
        {
            path     : '/ui/helper-classes',
            component: FuseLoadable({
                loader: () => import('./helper-classes/HelperClassesUI')
            })
        }
    ]
};


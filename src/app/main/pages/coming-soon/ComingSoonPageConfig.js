import {FuseLoadable} from '@fuse';

export const ComingSoonPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/coming-soon',
            component: FuseLoadable({
                loader: () => import('./ComingSoonPage')
            })
        }
    ]
};

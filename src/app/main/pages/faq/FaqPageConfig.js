import {FuseLoadable} from '@fuse';

export const FaqPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/faq',
            component: FuseLoadable({
                loader: () => import('./FaqPage')
            })
        }
    ]
};

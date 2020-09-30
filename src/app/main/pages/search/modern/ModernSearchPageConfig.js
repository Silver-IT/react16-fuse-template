import {FuseLoadable} from '@fuse';

export const ModernSearchPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/search/modern',
            component: FuseLoadable({
                loader: () => import('./ModernSearchPage')
            })
        }
    ]
};

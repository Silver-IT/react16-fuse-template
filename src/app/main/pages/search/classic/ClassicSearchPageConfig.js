import {FuseLoadable} from '@fuse';

export const ClassicSearchPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/search/classic',
            component: FuseLoadable({
                loader: () => import('./ClassicSearchPage')
            })
        }
    ]
};

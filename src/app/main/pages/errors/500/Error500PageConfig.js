import {FuseLoadable} from '@fuse';

export const Error500PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/errors/error-500',
            component: FuseLoadable({
                loader: () => import('./Error500Page')
            })
        }
    ]
};

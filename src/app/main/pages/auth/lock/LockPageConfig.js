import {FuseLoadable} from '@fuse';

export const LockPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/lock',
            component: FuseLoadable({
                loader: () => import('./LockPage')
            })
        }
    ]
};

import {FuseLoadable} from '@fuse';

export const RegisterPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/register',
            component: FuseLoadable({
                loader: () => import('./RegisterPage')
            })
        }
    ]
};

import {FuseLoadable} from '@fuse';

export const LoginPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/login',
            component: FuseLoadable({
                loader: () => import('./LoginPage')
            })
        }
    ]
};

import {FuseLoadable} from '@fuse';

export const Login2PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/login-2',
            component: FuseLoadable({
                loader: () => import('./Login2Page')
            })
        }
    ]
};

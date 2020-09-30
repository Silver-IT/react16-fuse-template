import {FuseLoadable} from '@fuse';

export const Register2PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/register-2',
            component: FuseLoadable({
                loader: () => import('./Register2Page')
            })
        }
    ]
};

import {FuseLoadable} from '@fuse';

export const ForgotPassword2PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/forgot-password-2',
            component: FuseLoadable({
                loader: () => import('./ForgotPassword2Page')
            })
        }
    ]
};

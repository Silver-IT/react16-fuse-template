import {FuseLoadable} from '@fuse';

export const ForgotPasswordPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/forgot-password',
            component: FuseLoadable({
                loader: () => import('./ForgotPasswordPage')
            })
        }
    ]
};

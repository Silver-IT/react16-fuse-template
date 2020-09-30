import {FuseLoadable} from '@fuse';

export const ResetPasswordPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/reset-password',
            component: FuseLoadable({
                loader: () => import('./ResetPasswordPage')
            })
        }
    ]
};

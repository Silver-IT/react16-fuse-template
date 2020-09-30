import {FuseLoadable} from '@fuse';

export const ResetPassword2PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/reset-password-2',
            component: FuseLoadable({
                loader: () => import('./ResetPassword2Page')
            })
        }
    ]
};

import {FuseLoadable} from '@fuse';

export const MailConfirmPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/auth/mail-confirm',
            component: FuseLoadable({
                loader: () => import('./MailConfirmPage')
            })
        }
    ]
};

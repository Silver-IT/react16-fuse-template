import React from 'react';
import {FuseLoadable} from '@fuse';
import {Redirect} from 'react-router-dom';

export const MailAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/apps/mail/label/:labelHandle/:mailId?',
            component: FuseLoadable({
                loader: () => import('./MailApp')
            })
        },
        {
            path     : '/apps/mail/filter/:filterHandle/:mailId?',
            component: FuseLoadable({
                loader: () => import('./MailApp')
            })
        },
        {
            path     : '/apps/mail/:folderHandle/:mailId?',
            component: FuseLoadable({
                loader: () => import('./MailApp')
            })
        },
        {
            path     : '/apps/mail',
            component: () => <Redirect to="/apps/mail/inbox"/>
        }
    ]
};

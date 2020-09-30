import {FuseLoadable} from '@fuse';

export const ModernInvoicePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/invoices/modern',
            component: FuseLoadable({
                loader: () => import('./ModernInvoicePage')
            })
        }
    ]
};

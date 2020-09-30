import {FuseLoadable} from '@fuse';

export const CompactInvoicePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/invoices/compact',
            component: FuseLoadable({
                loader: () => import('./CompactInvoicePage')
            })
        }
    ]
};

import {FuseLoadable} from '@fuse';

export const PricingStyle3PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/pricing/style-3',
            component: FuseLoadable({
                loader: () => import('./PricingStyle3Page')
            })
        }
    ]
};

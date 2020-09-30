import {FuseLoadable} from '@fuse';

export const PricingStyle2PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/pricing/style-2',
            component: FuseLoadable({
                loader: () => import('./PricingStyle2Page')
            })
        }
    ]
};

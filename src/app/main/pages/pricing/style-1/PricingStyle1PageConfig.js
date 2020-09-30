import {FuseLoadable} from '@fuse';

export const PricingStyle1PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/pricing/style-1',
            component: FuseLoadable({
                loader: () => import('./PricingStyle1Page')
            })
        }
    ]
};

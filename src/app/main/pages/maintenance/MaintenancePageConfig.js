import {FuseLoadable} from '@fuse';

export const MaintenancePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/maintenance',
            component: FuseLoadable({
                loader: () => import('./MaintenancePage')
            })
        }
    ]
};

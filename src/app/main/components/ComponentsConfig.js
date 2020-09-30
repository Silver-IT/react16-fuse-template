import {MaterialUIRoutes} from './material-ui/MaterialUIRoutes';
import {FuseComponentsRoutes} from './fuse/FuseComponentsRoutes';
import {ThirdPartyComponentsRoutes} from './third-party/ThirdPartyComponentsRoutes';

export const ComponentsConfig = {
    routes: [
        ...MaterialUIRoutes,
        ...ThirdPartyComponentsRoutes,
        ...FuseComponentsRoutes
    ]
};


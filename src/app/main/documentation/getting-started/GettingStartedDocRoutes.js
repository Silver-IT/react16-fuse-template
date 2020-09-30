import {FuseLoadable} from '@fuse';

export const GettingStartedDocRoutes = [
    {
        path     : '/documentation/getting-started/introduction',
        component: FuseLoadable({
            loader: () => import('./introduction/IntroductionDoc')
        })
    },
    {
        path     : '/documentation/getting-started/installation',
        component: FuseLoadable({
            loader: () => import('./installation/InstallationDoc')
        })
    },
];

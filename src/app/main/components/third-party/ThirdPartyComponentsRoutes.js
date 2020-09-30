import {FuseLoadable} from '@fuse';

export const ThirdPartyComponentsRoutes = [
    {
        path     : '/components/third-party/formsy',
        component: FuseLoadable({
            loader: () => import('./formsy/FormsyDoc')
        })
    },
    {
        path     : '/components/third-party/datatables/react-table',
        component: FuseLoadable({
            loader: () => import('./datatables/react-table/ReactTableDoc')
        })
    },
    {
        path     : '/components/third-party/google-map-react',
        component: FuseLoadable({
            loader: () => import('./google-map-react/GoogleMapReactDoc')
        })
    },
    {
        path     : '/components/third-party/react-chartjs-2',
        component: FuseLoadable({
            loader: () => import('./react-chartjs-2/ReactChartJs2Doc')
        })
    }
];


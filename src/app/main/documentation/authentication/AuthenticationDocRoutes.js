import {FuseLoadable} from '@fuse';

export const AuthenticationDocRoutes = [
    {
        path     : '/documentation/authentication/jwt',
        component: FuseLoadable({
            loader: () => import('./jwt/jwtAuthDoc')
        })
    },
    {
        path     : '/documentation/authentication/firebase',
        component: FuseLoadable({
            loader: () => import('./firebase/FirebaseAuthDoc')
        })
    },
    {
        path     : '/documentation/authentication/auth0',
        component: FuseLoadable({
            loader: () => import('./auth0/Auth0AuthDoc')
        })
    }
];

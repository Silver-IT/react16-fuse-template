import React from 'react';
import {FuseLoadable} from '@fuse';
import {Redirect} from 'react-router-dom';

export const TodoAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/apps/todo/label/:labelHandle/:todoId?',
            component: FuseLoadable({
                loader: () => import('./TodoApp')
            })
        },
        {
            path     : '/apps/todo/filter/:filterHandle/:todoId?',
            component: FuseLoadable({
                loader: () => import('./TodoApp')
            })
        },
        {
            path     : '/apps/todo/:folderHandle/:todoId?',
            component: FuseLoadable({
                loader: () => import('./TodoApp')
            })
        },
        {
            path     : '/apps/todo',
            component: () => <Redirect to="/apps/todo/all"/>
        }
    ]
};

import {FuseLoadable} from '@fuse';

export const KnowledgeBasePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/knowledge-base',
            component: FuseLoadable({
                loader: () => import('./KnowledgeBasePage')
            })
        }
    ]
};

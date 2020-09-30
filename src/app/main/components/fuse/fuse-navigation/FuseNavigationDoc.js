import React from 'react';
import {Icon, Typography} from '@material-ui/core';
import {FuseHighlight, FusePageSimple} from '@fuse';

const FuseNavigationDoc = () => {
    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Components</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Fuse Components</Typography>
                        </div>
                        <Typography variant="h6">FuseNavigation</Typography>
                    </div>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">

                    <Typography className="mb-16" component="p">
                        <code>FuseNavigation</code> is a custom built Fuse component allows you to create a multi-level collapsable navigation.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h6">[navigation]</Typography>

                    <Typography className="mb-16" component="p">
                        <code>FuseNavigation</code> uses a array to populate the entire navigation. It supports four different navigation items;
                        Group,
                        Collapse, Item. and Divider. These items can be mixed and matched to create unique and complex navigation layouts.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h6">[layout]</Typography>

                    <Typography className="mb-16" component="p">
                        "vertical" or "horizontal" layout options.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h6">[active]</Typography>

                    <Typography className="mb-16" component="p">
                        You can set <b>active</b> to "square" for to use square active item style instead of rounded/circle for <b>vertical layout</b>.
                    </Typography>

                    <Typography className="mt-32 mb-8" variant="h5">Usage</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {
                            `
                                    <FuseNavigation navigation={navigation} layout="vertical" active="square"/>
                                `
                        }
                    </FuseHighlight>

                    <Typography className="mt-32 mb-8" variant="h6">Group</Typography>
                    <FuseHighlight component="pre" className="language-json">
                        {
                            `
                                     {
                                        'id'       : 'applications',
                                        'title'    : 'Applications',
                                        'type'     : 'group',
                                        'icon'     : 'apps',
                                        'children' : [
                                             {
                                                'id'       : 'calendar',
                                                'title'    : 'Calendar',
                                                'type'     : 'item',
                                                'icon'     : 'today',
                                                'url'      : '/apps/calendar'
                                            }
                                        ]
                                     }
                                `
                        }
                    </FuseHighlight>

                    <Typography className="mt-32 mb-8" variant="h6">Collapse</Typography>
                    <FuseHighlight component="pre" className="language-json">
                        {
                            `
                                     {
                                        'id'       : 'dashboards',
                                        'title'    : 'Dashboards',
                                        'type'     : 'collapse',
                                        'icon'     : 'dashboard',
                                        'children' : [
                                            {
                                                'id'   : 'project',
                                                'title': 'Project',
                                                'type' : 'item',
                                                'url'  : '/apps/dashboards/project'
                                            }
                                        ]
                                      }
                                `
                        }
                    </FuseHighlight>

                    <Typography className="mt-32 mb-8" variant="h6">Item</Typography>
                    <FuseHighlight component="pre" className="language-json">
                        {
                            `
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project'
                                }
                                `
                        }
                    </FuseHighlight>
                    <Typography className="text-20 mt-24 mb-8 font-semibold" component="h2">
                        exact: bool
                    </Typography>
                    <Typography className="text-16 mb-8" component="h2">
                        When true, the active class/style will only be applied if the location is matched exactly.
                    </Typography>
                    <FuseHighlight component="pre" className="language-json">
                        {
                            `
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project',
                                    'exact': true
                                }
                                `
                        }
                    </FuseHighlight>
                    <Typography className="mt-32 mb-8" variant="h6">Divider</Typography>
                    <FuseHighlight component="pre" className="language-json">
                        {
                            `
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project'
                                }
                                {
                                    'type': 'divider
                                },
                                {
                                    'id'   : 'project',
                                    'title': 'Project',
                                    'type' : 'item',
                                    'url'  : '/apps/dashboards/project'
                                }
                                `
                        }
                    </FuseHighlight>
                </div>
            }
        />
    );
};

export default FuseNavigationDoc;

import React, {Component} from 'react';
import {withStyles, Hidden, Icon, IconButton} from '@material-ui/core';
import {FusePageCarded, DemoContent, DemoSidebarContent} from '@fuse';

const styles = theme => ({
    layoutRoot: {}
});

class CardedRightSidebar2Sample extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageCarded
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-col flex-1">
                        <div className="flex items-center py-24">
                            <div className="flex-1"><h4>Header</h4></div>
                            <Hidden lgUp>
                                <IconButton
                                    onClick={(ev) => this.pageLayout.toggleRightSidebar()}
                                    aria-label="open left sidebar"
                                >
                                    <Icon>menu</Icon>
                                </IconButton>
                            </Hidden>
                        </div>
                    </div>
                }
                contentToolbar={
                    <div className="px-24"><h4>Content Toolbar</h4></div>
                }
                content={
                    <div className="p-24">
                        <h4>Content</h4>
                        <br/>
                        <DemoContent/>
                    </div>
                }
                rightSidebarHeader={
                    <div className="p-24"><h4>Sidebar Header</h4></div>
                }
                rightSidebarContent={
                    <div className="p-24">
                        <h4>Sidebar Content</h4>
                        <br/>
                        <DemoSidebarContent/>
                    </div>
                }
                innerScroll
                onRef={instance => {
                    this.pageLayout = instance;
                }}
            />
        )
    };
}

export default withStyles(styles, {withTheme: true})(CardedRightSidebar2Sample);

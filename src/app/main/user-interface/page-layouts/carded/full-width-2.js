import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import {FusePageCarded, DemoContent} from '@fuse';

const styles = theme => ({
    layoutRoot: {}
});

class CardedFullWidth2Sample extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageCarded
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="py-24"><h4>Header</h4></div>
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
                innerScroll
            />
        )
    };
}

export default withStyles(styles, {withTheme: true})(CardedFullWidth2Sample);

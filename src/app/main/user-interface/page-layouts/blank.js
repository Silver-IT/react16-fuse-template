import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import {DemoContent} from '@fuse';

const styles = theme => ({
    root: {
        padding: 24
    }
});

class BlankSample extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <DemoContent/>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(BlankSample);

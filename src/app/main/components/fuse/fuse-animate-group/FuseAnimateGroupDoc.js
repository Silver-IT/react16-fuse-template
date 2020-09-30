import React, {Component} from 'react';
import {Typography, List, ListItem, Icon} from '@material-ui/core';
import {FuseAnimateGroup, FuseHighlight, FusePageSimple} from '@fuse';

const list = [
    'List Item 1',
    'List Item 2',
    'List Item 3',
    'List Item 4',
    'List Item 5',
    'List Item 6',
    'List Item 7',
    'List Item 8',
    'List Item 9',
    'List Item 10',
    'List Item 11',
    'List Item 12',
    'List Item 13',
    'List Item 14',
    'List Item 15'
];

class FuseAnimateGroupDoc extends Component {

    state = {
        intervalId     : null,
        list           : list,
        selectedEffect : 'fade',
        customAnimation: {
            translateX: [0, '100%'],
            opacity   : [1, 0]
        }
    };

    componentDidMount()
    {
        const intervalId = setInterval(() => (
            this.setState({
                list: this.state.list.length !== 0 ? [] : list
            })
        ), 2000);
        this.setState({intervalId});
    }

    handleChange = (event) => {
        this.setState({selectedEffect: event.target.value});
    };

    componentWillUnmount()
    {
        clearInterval(this.state.intervalId);
    }

    render()
    {
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
                            <Typography variant="h6">FuseAnimateGroup</Typography>
                        </div>
                    </div>

                }
                content={
                    <div className="p-24 max-w-2xl">

                        <Typography className="mb-16" component="p">
                            <code>FuseAnimateGroup</code> is a container component which
                            uses <code>VelocityTransitionGroup</code> of <code>velocity-react</code> library.
                            Delegates to the React TransitionGroup addon.
                        </Typography>

                        <Typography className="mt-32 mb-8" variant="h5">Sample Usage</Typography>

                        <div className="flex flex-wrap p-48 items-start">

                            <div className="flex w-full sm:w-1/2 p-24 justify-center">
                                <List>
                                    <FuseAnimateGroup
                                        enter={{
                                            animation: "transition.slideUpBigIn"
                                        }}
                                        leave={{
                                            animation: "transition.slideUpBigOut"
                                        }}
                                    >
                                        {
                                            this.state.list.map((item) => (
                                                    <ListItem key={item}>
                                                        {item}
                                                    </ListItem>
                                                )
                                            )
                                        }
                                    </FuseAnimateGroup>
                                </List>
                            </div>

                            <div className="flex w-full sm:w-1/2 p-24 justify-center">
                                <FuseHighlight component="pre" className="language-jsx">
                                    {`
                                     <List>
                                        <FuseAnimateGroup
                                            enter={{
                                                animation: "transition.slideUpBigIn"
                                            }}
                                            leave={{
                                                animation: "transition.slideUpBigOut"
                                            }}
                                        >
                                            {
                                                this.state.list.map((item) => (
                                                        <ListItem key={item}>
                                                            {item}
                                                        </ListItem>
                                                    )
                                                )
                                            }
                                        </FuseAnimateGroup>
                                    </List>
                                    `}
                                </FuseHighlight>
                            </div>
                        </div>

                        <Typography className="mb-16" component="p">
                            For more information checkout the
                            <a href="https://github.com/google-fabric/velocity-react" target="_blank" rel="noopener noreferrer" className="ml-8 font-bold">velocity-react</a>.
                        </Typography>
                    </div>
                }
            />
        );
    }
}

export default FuseAnimateGroupDoc;

import React, {Component} from 'react';
import {Typography} from '@material-ui/core';
import {FuseChipSelect} from '@fuse';

const suggestions = [
    'Sea',
    'Sky',
    'Forest',
    'Aerial',
    'Art'
].map(item => ({
    value: item,
    label: item
}));

class SimpleExample extends Component {

    state = {
        tags: [
            {
                value: "nature",
                label: "Nature"
            },
            {
                value: "city",
                label: "City"
            },
            {
                value: "landscape",
                label: "Landscape"
            }
        ]
    };

    onSubmit = (model) => {
        console.info('submit', model);
    };

    handleChipChange = (value) => {
        this.setState({tags: value});
    };

    render()
    {
        const {tags} = this.state;

        return (
            <div className="w-full max-w-sm pt-64 pb-224">

                <Typography className="text-24 mt-24 mb-8" component="h2">Standart</Typography>

                <FuseChipSelect
                    className="w-full my-16"
                    value={tags}
                    onChange={this.handleChipChange}
                    placeholder="Select multiple tags"
                    textFieldProps={{
                        label          : 'Tags',
                        InputLabelProps: {
                            shrink: true
                        },
                        variant        : 'standard'
                    }}
                    options={suggestions}
                    isMulti
                />

                <Typography className="text-24 mt-24 mb-8" component="h2">Outlined</Typography>

                <FuseChipSelect
                    className="w-full my-16"
                    value={tags}
                    onChange={this.handleChipChange}
                    placeholder="Select multiple tags"
                    textFieldProps={{
                        label          : 'Tags',
                        InputLabelProps: {
                            shrink: true
                        },
                        variant        : 'outlined'
                    }}
                    options={suggestions}
                    isMulti
                />

                <Typography className="text-24 mt-24 mb-8" component="h2">Filled</Typography>

                <FuseChipSelect
                    className="w-full my-16"
                    value={tags}
                    onChange={this.handleChipChange}
                    placeholder="Select multiple tags"
                    textFieldProps={{
                        label          : 'Tags',
                        InputLabelProps: {
                            shrink: true
                        },
                        variant        : 'filled'
                    }}
                    options={suggestions}
                    isMulti
                />
            </div>
        );
    }
}

export default SimpleExample;

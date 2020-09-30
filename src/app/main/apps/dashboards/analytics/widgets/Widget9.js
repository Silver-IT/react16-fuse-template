import React from 'react';
import {withStyles, Button, Card, Divider, Icon, IconButton, Typography} from '@material-ui/core';

const Widget9 = ({data}) => {
    return (
        <Card className="w-full rounded-8 shadow-none border-1">

            <div className="p-16 pr-4 flex flex-row items-center justify-between">

                <Typography className="h1 pr-16">Top campaigns</Typography>

                <div>
                    <IconButton aria-label="more">
                        <Icon>more_vert</Icon>
                    </IconButton>
                </div>
            </div>

            <table className="simple clickable">
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-right">Clicks</th>
                        <th className="text-right">Conv</th>
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map(row => (
                        <tr key={row.title}>
                            <td>{row.title}</td>
                            <td className="text-right">{row.clicks}</td>
                            <td className="text-right">{row.conversion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Divider className="card-divider w-full"/>

            <div className="p-8 pt-16 flex flex-row items-center">
                <Button>GO TO CAMPAIGNS</Button>
            </div>
        </Card>
    );
};

export default withStyles(null, {withTheme: true})(Widget9);

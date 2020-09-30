import React from 'react';
import {withStyles, Card, Icon, Tooltip} from '@material-ui/core';
import GoogleMap from 'google-map-react';

function Marker({text})
{
    return (
        <Tooltip title={text} placement="top">
            <Icon className="text-red">place</Icon>
        </Tooltip>
    );
}

const Widget6 = ({data}) => {
    return (
        <Card className="w-full h-512 rounded-8 shadow-none border-1">

            <GoogleMap
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_MAP_KEY
                }}
                defaultZoom={1}
                defaultCenter={[17.308688, 7.03125]}
                options={{
                    styles: data.styles
                }}
            >
                {data.markers.map(marker => (
                    <Marker
                        key={marker.label}
                        text={marker.label}
                        lat={marker.lat}
                        lng={marker.lng}
                    />
                ))}
            </GoogleMap>
        </Card>
    );
};

export default withStyles(null, {withTheme: true})(Widget6);

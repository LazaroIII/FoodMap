
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from './Pin';

const SimpleMap = ({ lati, longi, obse }) => {
    const [center] = useState({lat: Number(lati), lng: Number(longi) });
    const [zoom] = useState(15);
    return (
        <div style={{ height: '60vh'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCYHDZUCNyK3jxGr8DeZ5qYB9iHMLuoC_k' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Pin
            lat={lati}
            lng={longi}
            text={obse}
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;
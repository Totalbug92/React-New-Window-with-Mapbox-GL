import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

export default function Map() {

    const MapToken = ReactMapboxGl({
        accessToken:
          'pk.eyJ1IjoidG90YWxidWciLCJhIjoiY2s0aTV0dWw0MWRhNDNmcm1oNDRrbGtiZiJ9.IW1srUTw4P6E-h9Torx_9Q'
      });
       

    return (
        <div>
            <MapToken
                // eslint-disable-next-line
                style={"mapbox://styles/mapbox/streets-v9"  }
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}         
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer>
            </MapToken>
        </div>
    )
}

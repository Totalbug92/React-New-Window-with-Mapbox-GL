import React, { useState, useEffect } from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { getAllUrlParams } from '../functions/getUrlParams';

type UrlParams = {
    broadcastChannel?: string,

}


export default function Map() {
    const [broadcastChannel, setBroadcastChannel] = useState<BroadcastChannel>();


    useEffect(() => {
        const urlParams: UrlParams = getAllUrlParams()

        if(urlParams.broadcastChannel){
            setBroadcastChannel(new BroadcastChannel(urlParams.broadcastChannel))
            if(broadcastChannel){
                broadcastChannel.onmessage = (event: MessageEvent) => {
                    console.log(event);
                }
            }
        }
    }, [broadcastChannel])
    

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

import React, { useState, useEffect } from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { getAllUrlParams } from '../functions/getUrlParams';
import { MapEvent } from 'react-mapbox-gl/lib/map-events';
import { MouseEvent } from 'react-mapbox-gl/lib/geojson-layer';

type UrlParams = {
    broadcastchannel: string,

}
interface test{

}
type Props = {
    urlParams: React.ReactPropTypes,
}

type LonLan = [number, number]

type Msg = {
  action: string,
  payload: any,
}
const urlParams: any = getAllUrlParams()


export default function Map(props: Props) {
  const [broadcastChannel, setBroadcastChannel] = useState<BroadcastChannel>(new BroadcastChannel(urlParams.broadcastchannel));
  // MAP gl folka suger, should be number[] not [number, number]
  const [lonLat, setLonLat] = useState<LonLan>([10.457327, 61.123414]);

  if(broadcastChannel){
    broadcastChannel.onmessage = (event: MessageEvent) => {
        console.log(event);
    }
  }
  console.log(broadcastChannel)

  


  const MapToken = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoidG90YWxidWciLCJhIjoiY2s0aTV0dWw0MWRhNDNmcm1oNDRrbGtiZiJ9.IW1srUTw4P6E-h9Torx_9Q'
  });


  const sendBroadCastMsg = (msg: Msg) => {
    console.log(msg)
    if(broadcastChannel){
      broadcastChannel.postMessage(msg)
    }
  }

  const mapClick = (map: any, evt: any) => {
    console.log(evt.lngLat)
    sendBroadCastMsg({action: 'newCoordinates', payload: evt.lngLat})
  }
  
  return (
    <div>
      <MapToken
        // eslint-disable-next-line
        style={"mapbox://styles/mapbox/streets-v11"  }
        containerStyle={{
            height: '100vh',
            width: '100vw',
        }}
        center={lonLat}
        zoom={[4]}
        onClick={mapClick}
      >
        
      </MapToken>
    </div>
  )
}
//(e: any) => {console.log(e); )
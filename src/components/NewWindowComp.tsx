import React, { useState, useEffect } from 'react'
import NewWindow from 'react-new-window'
import Map from './Map'

type Props = {
    broadcastChannel?: string,

}

export default function NewWindowComp(props: Props) {
    const [open, setOpen] = useState(false)
    const [broadcastChannel] = useState<BroadcastChannel>(new BroadcastChannel(props.broadcastChannel !== undefined ? props.broadcastChannel : 'testchannel'));
    const [coordinates, setCoordinates] = useState()
    
    broadcastChannel.onmessage = (event: any) => {
        console.log(event.data)
        setCoordinates(event.data.payload)
    }
    
    const openWindow = (e:any) => {
        
        setOpen(!open)
    }
    return (
        <div>
            <p>Map!</p>
            <p>Coordinates(lat/long): {coordinates !== undefined && coordinates.lat + ' ' + coordinates.lng}</p>
            <button onClick={openWindow}>{open ? 'Close window' : 'Open new Window'}</button>
            {open && 
            <NewWindow
                url={'/map?broadcastChannel=' + (props.broadcastChannel !== undefined ? props.broadcastChannel : 'testchannel')}>
                
            </NewWindow>}
        </div>
    )
}

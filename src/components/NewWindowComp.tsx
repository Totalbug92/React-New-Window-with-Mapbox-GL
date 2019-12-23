import React, { useState } from 'react'
import NewWindow from 'react-new-window'
import Map from './Map'

export default function NewWindowComp() {
    const [counter, setCounter] = useState<number>(0)
    const [open, setOpen] = useState(false)

    const btnClickPluss = (e:any) =>  {
        setCounter(counter + 1)
    }
    const btnClickMinus = (e:any) => {
        setCounter(counter - 1)
    }
    const openWindow = (e:any) => {
        setOpen(!open)
    }
    return (
        <div>
            <p>Map! {counter}</p>
            <button onClick={openWindow}>{open ? 'Close window' : 'Open new Window'}</button>
            {open && 
            <NewWindow
                url={'/map?broadcastChannel=testServer'}>
                
            </NewWindow>}
        </div>
    )
}

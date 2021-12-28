import React from 'react'
import './BackDrop.css'
export default function BackDrop(props) {
    return (
        props.show ? <div className="BackDrop" onClick={props.clicked}> </div> :null
    )
}

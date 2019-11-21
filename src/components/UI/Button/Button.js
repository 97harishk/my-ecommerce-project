import React from 'react'
import './Button.css'
export default function Button(props) {
    return (
        <div className="Button">
            <button className="Button-Element" onClick={props.click}>{props.children}</button>
        </div>
    )
}

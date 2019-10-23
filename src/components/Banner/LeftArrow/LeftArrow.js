import React from 'react'
import './LeftArrow.css'
export default function LeftArrow(props) {
    return (
        <div className="align-left" onClick={props.clicked}>
            <i className="fas fa-chevron-left" ></i>
        </div>
    )
}

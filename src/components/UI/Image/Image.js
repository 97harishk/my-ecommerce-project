import React from 'react'
import './Image.css'
export default function Image(props) {
    return (
        <div className="image-container">
            <img src={props.image[0]} alt="Product"></img>            
        </div>
    )
}
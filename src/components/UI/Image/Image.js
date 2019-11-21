import React from 'react'
import './Image.css'
import img from '../../../assets/images/product/product1.jpg'
export default function Image(props) {
    return (
        <div className="image-container">
            <img src={props.image[0]} alt="Product"></img>            
        </div>
    )
}
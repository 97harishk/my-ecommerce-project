import React from 'react'
import './ProductSnap.css'
export default function ProductSnap(props) {
    return (
            <div className="product-snaps" onMouseEnter={props.click}>
                <img src={props.imgUrl} alt="Snaps"/>
            </div>
    )
}

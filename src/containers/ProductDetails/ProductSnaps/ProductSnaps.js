import React, { Component } from 'react'
import ProductSnap from './ProductSnap/ProductSnap'
import './ProductSnaps.css'
export class ProductSnaps extends Component {
    render() {
        let images = this.props.image.map((image, index) =>{
            return <ProductSnap  imgUrl={image} click={() => this.props.click(index)}/>
        })
        return (
            <div className="product-snap-wrapper">
                {images}
           </div> 
              
        )
    }
}

export default ProductSnaps

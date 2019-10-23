import React, { Component } from 'react'
import './FeatureProduct.css'
import productImg from '../../../../assets/images/product/product.jpg'
export class FeatureProduct extends Component {
    render() {
        return (
            <div className="featured-product-item">
                <div className="featured-product-picture">
                    <img src={productImg} alt="Product Images" />
                </div>
                <div className="featured-product-desc">
                    <div className="featured-product-label">
                        {this.props.product.name}
                    </div>
                    <div className="featured-product-Price">
                    <del>₹ {this.props.product.price  } </del>
                         ₹ {this.props.product.price - this.props.product.discount}
                    </div>
                    <div className="add-to-cart-button">
                    Add TO Cart
                    </div>
                </div>
            </div>
        )
    }
}

export default FeatureProduct

import React, { Component } from 'react'
import './FeatureProduct.css'
import * as cartAction from '../../../../store/cart/cartAction'
import {connect} from 'react-redux'
export class FeatureProduct extends Component {
    render() {
        return (
            <div className="featured-product-item">
                <div className="featured-product-picture">
                    <img src={this.props.product.images[0]} alt="Product Images" />
                </div>
                <div className="featured-product-desc">
                    <div className="featured-product-label blue bold">
                        {this.props.product.title}
                    </div>
                    <div className="featured-product-Price red">
                        <label className="bold"> ₹ {this.props.product.price.toFixed(2) - 450}</label>
                         <del className="grey ml10">₹ {this.props.product.price.toFixed(2)  } </del>
                    </div>
                    <div className="add-to-cart-button">
                    <label onClick={() => this.props.addCart(this.props.authState.localId, this.props.product._id)}>Add TO Cart</label>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        authState: state.authReducer
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        addCart: (userId, productId) => dispatch(cartAction.addProductToCart(userId, productId))
       }    
}
export default connect(mapStateToProps, mapDispatchToProps )(FeatureProduct)

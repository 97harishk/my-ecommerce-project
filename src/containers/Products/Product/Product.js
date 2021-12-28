import React, { Component } from 'react'
import './Product.css'
import {connect} from 'react-redux'
import * as cartAction from '../../../store/cart/cartAction'
import ProductImage from '../../../components/UI/Image/Image'
import {Link} from 'react-router-dom'
export class Product extends Component {
    render() {
        return (
            <div className="product-items">
                <div className="product-add-to-wishlist" alt="Add to Wishlist">
                    <i className="far fa-heart" ></i>
                </div>
                <div className="product-snap">
                    <ProductImage image={this.props.products.images} />
                </div>
                <div className="product-name">
                  <Link to={"/productdetails/"+this.props.products._id+"/"+this.props.products.title} className="product-link-style">{this.props.products.title}</Link>
                </div>
                <div className="product-price">
                    ₹ {this.props.products.price.toFixed(0)}
                </div>
                <div className="product-add-to-cart" onClick={() => this.props.addCart(this.props.authState.localId, this.props.products._id)}>
                <label>Add TO Cart</label>
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
export default connect(mapStateToProps, mapDispatchToProps)(Product)

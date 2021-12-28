import React, { Component } from 'react'
import './CartItems.css'
import {connect} from 'react-redux'
import * as cartAction from '../../../store/cart/cartAction'
import img1 from '../../../assets/images/product/shopping.png'
export class CartItems extends Component {
    decrementCartItemQuantity = (itemId, qty) =>{
        if(qty <= 1){
            this.props.removeCartItem(this.props.authState.localId, itemId);
        }
    }

    decrementCartItemQuantity = (itemId, qty) =>{
        if(qty <= 1){
            this.props.removeCartItem(this.props.authState.localId, itemId);
        }
    }
    render() {
        return (
            <div className="cart-items">
            <div className="cart-items-image">
                <img src={this.props.product.images[0]} alt="Product" />
            </div>    
            <div className="cart-items-desc">
                <div className="cart-item-title">
                    {this.props.product.title}
                </div>
                <p>{this.props.product.description}</p>
                <label className="cp red" onClick={() =>this.props.removeCartItem(this.props.authState.localId, this.props.product._id)}>Remove</label>
            </div>  
            <div className="cart-items-check">
                <div className="cart-items-price">
                    <label>Price:</label>
                    ₹ {this.props.product.price.toFixed(2)}
                </div>
                <div className="cart-items-quantity">
                    <label>Quantity:</label>
                    <div className="quantity-control">
                        <div className="quantity-control-sub">
                            <i className="fas fa-minus" onClick={() => this.props.decrementCartItem(this.props.authState.localId, this.props.product._id, this.props.product.itemQuantity)}></i>
                        </div>
                        <div className="quantity-control-value">
                        {this.props.product.itemQuantity}
                        </div>
                        <div className="quantity-control-add">
                            <i className="fas fa-plus" onClick={() => this.props.incrementCartItem(this.props.authState.localId, this.props.product._id, this.props.product.itemQuantity)}></i>
                        </div>
                    </div>
                </div>
                <div className="cart-items-total">
                    <label>Sub Total:</label>
                    {this.props.product.subTotal.toFixed(2)}
                </div>
            </div>                      
        </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        authState: state.authReducer,
        cartState: state.cartReducer
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        decrementCartItem: (userId, productId, qty) => dispatch(cartAction.decrementItemQuantity(userId, productId, qty)),
        incrementCartItem: (userId, productId, qty) => dispatch(cartAction.incrementItemQuantity(userId, productId, qty)),
        removeCartItem: (userId, productId) => dispatch(cartAction.removeProductFromCart(userId, productId))
   }    
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItems)

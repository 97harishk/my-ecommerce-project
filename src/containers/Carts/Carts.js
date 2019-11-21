import React, { Component } from 'react'
import './Carts.css'
import {connect} from 'react-redux'
import Button from '../../components/UI/Button/Button'
import * as cartAction from '../../store/cart/cartAction'
import * as orderAction from '../../store/Order/orderAction'
import CartItems from './CartItems/CartItems'
import Input from '../../components/UI/Input/Input'
export class Carts extends Component {
    componentDidMount(){
        console.log('[set cart in cart page]',this.props.authState)
        this.props.setCart(this.props.authState.localId);
    }

    render() {
            let  cartItem = this.props.cartState.cartItem ? this.props.cartState.cartItem.map(cartItem =>{
            return <CartItems key={cartItem._id} product={cartItem} />
        })
        : <h1>Your Cart Is Empty!</h1>
        return (
            <div className="cart-section">
                <div className="cart-container">
                    <div className="cart-head">
                        Shopping Cart / <label className="darkblue" >Total Item:</label> <label className="red" >{this.props.cartState.cartItem ? cartItem.length : 0} </label>
                    </div>
                    <div className="cart-item-section">
                        <div className="products-list">
                            {cartItem}
                        </div>
                        <div className="cart-checkout">
                            <div className="cart-checkout-title">
                                Order Summary
                            </div>
                            <div className="cart-checkout-details">
                                <div className="cart-checkout-subtotal">
                                    <label>Sub Total:</label>
                                    <span className="bold red">₹ {this.props.cartState.totalPrice}</span>
                                </div>
                                <div className="cart-checkout-shipping">
                                    <label>Shipping:</label>
                                    <span className="bold">Free Shipping</span>
                                </div>
                                <div className="cart-checkout-total ">
                                    <label>Total:</label>
                                    <span className="bold red">₹ {this.props.cartState.totalPrice}</span>
                                </div>
                                <div className="cart-coupen">
                                    <Input placeholder="Coupen Code..." />
                                </div>
                            </div>
                            <Button click={() => this.props.addOrder(this.props.authState.localId,  this.props.cartState)} >Checkout</Button>
                        </div>
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
        setCart: (userId) => dispatch(cartAction.initCart(userId)),
        addOrder: (localId, order) => dispatch(orderAction.addOrder(localId, order))

   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Carts)
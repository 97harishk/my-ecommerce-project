import React, { Component } from 'react'
import './Carts.css'
import img1 from '../../assets/images/img/img1.jpg'
export class Carts extends Component {
    render() {
        return (
            <div className="cart-section">
                <div className="cart-container">
                    <div className="cart-head">
                        Your Cart Items!
                    </div>
                    <div className="cart-item-section">
                        <div className="cart-items">
                            <div className="cart-items-image">
                                <img src={img1} alt="Product" />
                            </div>
                            <div className="cart-items-details">
                                <h3>Name Of The Product Is Product,Name Of The Product Is Product</h3>
                            </div>
                            <div className="cart-items-details">
                                <h3>Quantity</h3>
                                    4
                            </div>
                            <div className="cart-items-details">
                                <h3>Price</h3>
                                    40
                            </div>
                            <div className="cart-items-details">
                                <h3>Price</h3>
                                    40
                            </div>    
                            
                        </div>
                        <div className="cart-checkout">
                        Your Cart Items!
                    </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Carts

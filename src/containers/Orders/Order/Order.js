import React, { Component } from 'react'
import './Order.css'
export class Order extends Component {
    render() {
        return (
        <div className="order-item">
            <div className="order-details">
                <label className="bold">Order Id : </label>{this.props.order._id}
            </div>
            <div className="order-details">
                {`${this.props.order.product[0].name}(${this.props.order.quantity[0]})`}
            </div>
            {this.props.order.userId.name}
            <div className="order-details">
                <label className="bold">Status: </label>{this.props.order.status}
            </div>
            <div className="order-details">
                <label className="bold">Price: </label>{this.props.order.totalPrice}
            </div>
        </div>
        )
    }
}

export default Order

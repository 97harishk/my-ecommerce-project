import React, { Component } from 'react'
import './Orders.css'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionType from '../../store/Order/orderAction'
import Order from './Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'
export class Orders extends Component {
    componentDidMount(){
        this.props.initOrder(this.props.authState.localId)
    }
    render() {
        let redirect = !this.props.authState.authenticated ?
                        <Redirect to="/sign-in" ></Redirect>
                        : null
        let order = <Spinner/> ;
        order  = this.props.orderState.orders ?
           this.props.orderState.orders.map(order =>{
            return <Order  key={order._id} order={order} />
        })  
        : <h1>No Item Found In Order List!</h1>
        return (
            <div className="order-section">
            {/* {redirect} */}
                <div className="order-container">
                    <div className="order-head">
                         Your Orders / <label className="darkblue" >Total Item:</label> <label className="red" >{order.length}</label>
                    </div>
                    <div className="order-items">
                        {order}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        authState : state.authReducer,
        orderState: state.orderReducer
 }
}

const mapDispatchTOProps = dispatch =>{
    return{
        initOrder: (localId) => dispatch(actionType.initOrder(localId))
    }
   
}
export default connect(mapStateToProps, mapDispatchTOProps)(Orders)

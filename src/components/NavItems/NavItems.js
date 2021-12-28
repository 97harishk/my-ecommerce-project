import React, { Component } from 'react'
import './NavItems.css'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/auth/authAction'
import BackDrop from '../UI/BackDrop/BackDrop'
import NavItem from './NavItem/NavItem'
import Aux from '../../hoc/Auxiliary/Auxuliary'
export class NavItems extends Component {
    render() {
        return (
            this.props.show ?
            <Aux>
                <BackDrop clicked={this.props.click} show={this.props.show}/>
                    <div className="nav-items">
                        {/* <NavItem clicked={this.props.click} to="/wishlist" >wishlist</NavItem> */}
                        <NavItem clicked={this.props.click} to="/orders" >orders</NavItem>
                        <NavItem clicked={this.props.click}  to="/cart" >cart</NavItem>
                        {this.props.authState.authenticated ?
                        <NavItem clicked={this.props.logOut}>sign-out</NavItem>
                        : <NavItem clicked={this.props.click} to="/sign-in">sign-in</NavItem>
                        }
                        
                        
                    </div>
            </Aux>
            : null
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
        logOut: () => dispatch(actionTypes.logOut())
   }    
}
export default connect(mapStateToProps, mapDispatchToProps)(NavItems)

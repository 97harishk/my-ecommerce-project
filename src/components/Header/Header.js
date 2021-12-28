import React, { Component } from 'react'
import './Header.css'
import SearchBar from '../UI/SearchBar/SearchBar'
import {NavLink} from 'react-router-dom'
import Logo from '../Logo/Logo'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/auth/authAction'
import SideDrawerToggle from '../UI/SideDrawerToggle/SideDrawerToggle'
import UserName from '../UI/UserName/UserName'
import NavItems from '../NavItems/NavItems'
 class Header extends Component {
     state= {
         showNavItems: false
     }
     showNavItemsHandler = () =>{
         this.setState({showNavItems: !this.state.showNavItems})
     }
    render() {
        let snap = this.props.authState.authenticated 
                ?   <div className="profile-snap">
                        <img src={this.props.authState.image} alt="Profile"/>
                    </div>
                :  null
        return (
            <header>
                <div className="Header-content-section">
                    <SideDrawerToggle  clicked ={this.props.click} />
                    <Logo />
                    <SearchBar/>
                    <div className="nav-section">
                        {snap}
                        {this.props.authState.authenticated ?
                        <UserName>{this.props.authState.name}</UserName>
                        :  <UserName>Sign Up!</UserName>
                        }
                        <div className="profile-icon">
                            <i className="fas fa-angle-down" onClick={this.showNavItemsHandler}></i>
                        </div> 
                    </div>
                </div>
                <NavItems show={this.state.showNavItems} click={this.showNavItemsHandler}/>
                <div className="Header-bottom">
                    <div className="header-bottom-icon">
                            <NavLink className="nav-link" to="/products/electronics">Electronics  <i className="fas fa-arrow-down"></i></NavLink>
                            <NavLink className="nav-link" to="/products/mens">Mens<i className="fas fa-arrow-down"></i></NavLink>
                            <NavLink className="nav-link" to="/products/women">Women<i className="fas fa-arrow-down"></i></NavLink>
                            <NavLink className="nav-link" to="/products/baby & kids">Baby & KIds <i className="fas fa-arrow-down"></i></NavLink>
                            <NavLink className="nav-link" to="/products/home & furniture">Home Furniture <i className="fas fa-arrow-down"></i></NavLink>
                            <NavLink className="nav-link" to="/products/sports">Sports <i className="fas fa-arrow-down"></i></NavLink>
                            <NavLink className="nav-link" to="/products/books">Books <i className="fas fa-arrow-down"></i></NavLink>
                            <NavLink className="nav-link" to="/products/offers">Offers</NavLink>
                    </div>
                </div>
            </header>
            
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
export default connect(mapStateToProps, mapDispatchToProps)(Header)

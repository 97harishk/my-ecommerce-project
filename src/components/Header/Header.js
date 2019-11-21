import React, { Component } from 'react'
import './Header.css'
import SearchBar from '../UI/SearchBar/SearchBar'
import {NavLink} from 'react-router-dom'
import Logo from '../Logo/Logo'
import CartIcon from '../UI/CartIcon/CartIcon'
import WishListIcon from '../UI/WishListIcon/WishListIcon'
import SignInUp from '../UI/SignInUp/SignInUp'
import SideDrawerToggle from '../UI/SideDrawerToggle/SideDrawerToggle'
 class Header extends Component {
    render() {
        return (
            <header>
                <div className="Header-content-section">
                    <SideDrawerToggle  clicked ={this.props.click} />
                    <Logo />
                    <SearchBar/>
                    <div className="nav-section">
                        <WishListIcon />
                        <CartIcon />
                        <SignInUp />
                    </div>
                </div>
                <div className="Header-bottom">
                    <div className="header-bottom-icon">
                            <NavLink className="nav-link" to="/contacts">Contact</NavLink>
                            <NavLink className="nav-link" to="/cart">Cart</NavLink>
                            <NavLink className="nav-link" to="/products">product</NavLink>
                            <NavLink className="nav-link" to="/orders">Orders</NavLink>
                    </div>
                </div>
            </header>
            
        )
    }
}

export default Header

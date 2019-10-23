import React, { Component } from 'react'
import './Header.css'
import HeaderTop from './HeaderTop/HeaderTop'
import SideDrawerToggle from '../UI/SideDrawerToggle/SideDrawerToggle'
import SearchBar from '../UI/SearchBar/SearchBar'
import logo from '../../assets/images/Logo/logo.png'
import {Link} from 'react-router-dom'
 class Header extends Component {
    render() {
        return (
            <header>
                <HeaderTop />
                <div className="Header-content-section">
                    <div className="Side-drawer-toggle" onClick ={this.props.click}>
                        <SideDrawerToggle  />
                    </div>
                    <div className="web-logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    
                    <div className="Search-bar-container">
                        <SearchBar />
                    </div>
                    <div className="Wish-list-icon">
                    <i className="far fa-heart"></i>
                    </div>
                    <div className="Cart-icon">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                </div>
                <div className="Header-bottom">
                    <div className="header-bottom-left-icon">
                        <ul>
                            <Link className="nav-link" to="/"><li>Home</li></Link>
                        </ul>
                    </div>
                    <div className="header-bottom-right-icon">
                        <ul>
                            <li><Link className="nav-link" to="contacts">Contact</Link></li>
                            <li><Link className="nav-link" to="cart">Cart</Link></li>
                            <li><Link className="nav-link" to="orders">Orders</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            
        )
    }
}

export default Header

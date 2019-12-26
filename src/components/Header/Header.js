import React, { Component } from 'react'
import './Header.css'
import SearchBar from '../UI/SearchBar/SearchBar'
import {NavLink} from 'react-router-dom'
import Logo from '../Logo/Logo'
import profileSnap from '../../assets/images/profile/61254836_2341365256138981_1058868704441270272_n.jpg'
import CartIcon from '../UI/CartIcon/CartIcon'
import WishListIcon from '../UI/WishListIcon/WishListIcon'
import SignInUp from '../UI/SignInUp/SignInUp'
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
        return (
            <header>
                <div className="Header-content-section">
                    <SideDrawerToggle  clicked ={this.props.click} />
                    <Logo />
                    <SearchBar/>
                    <div className="nav-section">
                        <div className="profile-snap">
                            <img src={profileSnap} alt="Profile"/>
                        </div>
                        <UserName />
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

export default Header

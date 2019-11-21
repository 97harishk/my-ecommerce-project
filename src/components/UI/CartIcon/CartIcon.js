import React from 'react'
import './CartIcon.css'
import {Link} from 'react-router-dom'
export default function CartIcon() {
    return (
        <Link to="/cart" className="Cart-icon">
           <i className="fas fa-shopping-cart"></i>
        </Link>
       
    )
}

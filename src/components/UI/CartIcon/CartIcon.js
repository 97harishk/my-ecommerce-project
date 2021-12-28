import React from 'react'
import './CartIcon.css'
import {Link} from 'react-router-dom'
export default function CartIcon(props) {
    return (
        <Link to="/cart" className="Cart-icon">
           <i className="fas fa-shopping-cart" onClick={props.clicked}></i>
        </Link>
       
    )
}

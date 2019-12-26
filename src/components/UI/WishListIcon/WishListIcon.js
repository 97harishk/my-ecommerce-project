import React from 'react'
import './WishListIcon.css'
import {Link} from 'react-router-dom'
export default function WishListIcon(props) {
    return (
            <Link to="/wishlist" className="Wish-list-icon" alt="WishList">
                <i className="far fa-heart" onClick={props.clicked}></i>
            </Link>
     )
}

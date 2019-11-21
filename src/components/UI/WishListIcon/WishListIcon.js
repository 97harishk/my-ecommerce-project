import React from 'react'
import './WishListIcon.css'
import {Link} from 'react-router-dom'
export default function WishListIcon() {
    return (
            <Link to="/wishlist" className="Wish-list-icon" alt="WishList">
                <i className="far fa-heart" ></i>
            </Link>
     )
}

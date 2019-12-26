import React from 'react'
import './MenuItems.css'
import {Link} from 'react-router-dom'
export default function MenuItems(props) {
    return (
        <div className="menu-item">
            <Link to={`/products`}  className="nav-link">{props.menu.name} <i className="fas fa-arrow-right"></i></Link>
        </div>
    )
}

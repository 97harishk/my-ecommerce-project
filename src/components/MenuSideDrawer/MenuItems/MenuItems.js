import React from 'react'
import './MenuItems.css'
export default function MenuItems(props) {
    return (
        <div className="menu-item">
            {props.menu.name} <i className="fas fa-arrow-right"></i>
        </div>
    )
}

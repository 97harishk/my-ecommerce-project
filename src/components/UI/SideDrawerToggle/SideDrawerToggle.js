import React from 'react'
import './SideDrawerToggle.css'
export default function SideDrawerToggle(props) {
    return (
        <div className="Drawer-toggle" onClick ={props.clicked} >
            <i className="fas fa-bars"></i>
        </div>
    )
}

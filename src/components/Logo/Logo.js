import React from 'react'
import './Logo.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/Logo/logo.png'
export default function Logo() {
    return (
        <div className="web-logo">
            <Link to='/'><img src={logo} alt="Logo" /></Link>
        </div>
    )
}

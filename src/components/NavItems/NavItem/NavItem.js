import React from 'react'
import './NavItem.css'
import {Link} from 'react-router-dom'
export default function CartIcon(props) {
    return (
        <Link to={props.to} className="Nav-icon">
          <label onClick={props.clicked}>{props.children}</label>
        </Link>
       
    )
}

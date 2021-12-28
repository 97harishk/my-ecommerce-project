import React from 'react'
import './UserName.css'
export default function UserName(props) {
    return (
        
        <div className="profile-name">
            <label>{props.children}</label>
        </div>
    )
}

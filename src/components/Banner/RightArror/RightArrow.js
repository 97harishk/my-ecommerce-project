import React from 'react'
import './RightArrow.css'
export default function RightArrow(props) {
    return (
        <div className="align-right" onClick={props.clicked}> 
              <i className="fas fa-chevron-right "></i>
        </div>
    )
}

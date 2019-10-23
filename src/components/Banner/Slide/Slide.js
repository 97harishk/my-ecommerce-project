import React, { Component } from 'react'
import './Slide.css'
export class Slide extends Component {
    render() {
        return (
            <div className="banner-img">
                 <img src={this.props.imageName} alt="Banner1"/>
            </div>
        )
    }
}

export default Slide

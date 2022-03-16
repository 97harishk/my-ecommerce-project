import React, { Component } from 'react'
import './Slide.css'
export class Slide extends Component {
    render() {
        return (
            <div className="banner-img">
                <img alt="slide" src={this.props.imageName} />
            </div>
        )
    }
}

export default Slide

import React, { Component } from 'react'
import img1 from '../../../assets/images/img/banner-1.jpg'
import img2 from '../../../assets/images/img/banner-2.jpg'
import './AdvertiseBanner.css'

export class AdvertiseBanner extends Component {
    render() {
        return (
            <div className="advertise-Banner-container">
                <div className="advertise-Banner">
                    <div className="advertise-Banner-img">
                        <img src={img1} alt="Image1" />
                    </div>
                    <div className="advertise-Banner-img">
                        <img src={img2} alt="Image2" />
                    </div>
                </div>
            </div>
        )
    }
}

export default AdvertiseBanner


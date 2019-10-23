import React, { Component } from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'
import AdverstiseBannner from './AdvertiseBanner/AdvertiseBanner'
export class Home extends Component {

    render() {
        return (
            <div>
                    <main className="site-container">
                        <Banner />
                        <AdverstiseBannner />
                        <FeaturedProducts />
                     </main>
            </div>
        )
    }
}

export default Home

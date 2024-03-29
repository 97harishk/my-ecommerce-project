import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'
import AdverstiseBannner from './AdvertiseBanner/AdvertiseBanner'
import TopSellingProducts from './TopSellingProducts/TopSellingProducts'
import RecentlyViewedProducts from './RecentlyViewedProducts/RecentlyViewedProducts'

const Home = () => {
    return (
        <div>
            <main className="site-container">
                <Banner />
                <AdverstiseBannner />
                <FeaturedProducts />  
                <TopSellingProducts /> 
                <RecentlyViewedProducts />
            </main>
        </div>
    )
}
export default Home;

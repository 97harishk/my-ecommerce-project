import React, { Component } from 'react'
// import './RecentlyViewedProducts.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import {connect} from 'react-redux'
import *  as  productAction from '../../../store/Products/ProductsAction'
import img1 from '../../../assets/products/r1.jpg'
import img2 from '../../../assets/products/r2.jpg'
import img3 from '../../../assets/products/r3.jpg'
import img4 from '../../../assets/products/r4.jpg'
import img5 from '../../../assets/products/r5.jpg'
import img6 from '../../../assets/products/r6.jpg'
export class RecentlyViewedProducts extends Component {
    // state = {
    //     xval: 0
    //  }
     componentDidMount(){
        this.props.setProducts();
     }
    //  leftxvalChangeHandler = () =>{
    //     this.setState({xval: this.state.xval + 364})
    //  }
    //  rightxvalChangeHandler = () =>{
    //     this.setState({xval: this.state.xval - 364})
    // }
    render() {
        // let rightClass = "fas fa-chevron-right"
        // let leftClass = "fas fa-chevron-left"
        
        // if(this.state.xval == 0){
        //     leftClass = "fas fa-chevron-left dn"
        // }
        // if(this.state.xval == -2184){
        //     rightClass = "fas fa-chevron-right dn"
        // }
        let images = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6]
        let recentlyViewed = <Spinner />
        recentlyViewed = 
            images ?
        images.map((img, i) => <div className="image-box" key={i}><img src={img} /></div>)
        : <h1>No Product Found</h1>
        return (
            <div className="featured-product-section">
                <div className="featured-product-top">
                        <div className="featured-product-title">
                            Recently Viewed Products
                        </div>
                        {/* <div className="featured-product-control">
                            <div className="left-arrow">
                                <i className={leftClass} onClick={this.leftxvalChangeHandler}></i>
                            </div>
                            <div className="right-arrow">
                                <i className={rightClass} onClick={this.rightxvalChangeHandler}></i>
                            </div>
                        </div> */}
                </div>
                <div className="featurd-product-container" >
                    <div className="featured-product-wrapper" >
                        {recentlyViewed}
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        products: state.productReducers.products
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        setProducts: () => dispatch(productAction.initProducts())
   }    
}
export default connect(mapStateToProps, mapDispatchToProps )(RecentlyViewedProducts)

import React, { Component } from 'react'
// import './FeaturedProducts.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import {connect} from 'react-redux'
import *  as  productAction from '../../../store/Products/ProductsAction'
import img1 from '../../../assets/products/p1.jpg'
import img2 from '../../../assets/products/p2.jpg'
import img3 from '../../../assets/products/p3.jpg'
import img4 from '../../../assets/products/p4.jpg'
import img5 from '../../../assets/products/p5.jpg'
import img6 from '../../../assets/products/p6.jpg'
import img7 from '../../../assets/products/p7.jpg'
import img8 from '../../../assets/products/p8.jpg'
import img9 from '../../../assets/products/p9.jpg'
import img10 from '../../../assets/products/p10.jpg'
export class FeaturedProducts extends Component {
    state = {
        xval: 0
     }
     componentDidMount(){
        this.props.setProducts();
     }
     leftxvalChangeHandler = () =>{
        this.setState({xval: this.state.xval + 214})
     }
     rightxvalChangeHandler = () =>{
        this.setState({xval: this.state.xval - 214})
    }
    render() {
        // let rightClass = "fas fa-chevron-right"
        // let leftClass = "fas fa-chevron-left"
        
        // if(this.state.xval === 0){
        //     leftClass = "fas fa-chevron-left dn"
        // }
        // if(this.state.xval === -2140){
        //     rightClass = "fas fa-chevron-right dn"
        // }
        let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
        let featureProduct = <Spinner />
        featureProduct = 
            images ?
        images.map((img, i) => <div className="image-box" key={i}><img alt="product" src={img} /></div>)
        : <h1>No Product Found</h1>
        return (
            <div className="featured-product-section">
                <div className="featured-product-top">
                        <div className="featured-product-title">
                            Featured Products
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
                       {featureProduct}
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
export default connect(mapStateToProps, mapDispatchToProps )(FeaturedProducts)

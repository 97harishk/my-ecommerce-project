import React, { Component } from 'react'
import './FeaturedProducts.css'
import FeatureProduct from './FeatureProduct/FeatureProduct'
import {connect} from 'react-redux'
import *  as  setProductAction from '../../../store/actions/productAction'
export class FeaturedProducts extends Component {
    state = {
        products: [] 
     }
     componentDidMount(){
         
        this.props.setProducts();
     }
    render() {
        let featureProduct = this.props.products.map(product => {
            return <FeatureProduct key ={product._id} product={product}/>
        })
        return (
            <div className="featured-product-section">
                <div className="featured-product-top">
                        <div className="featured-product-title">
                            Featured Products
                        </div>
                        <div className="featured-product-control">
                            <div className="left-arrow">
                                <i className="fas fa-chevron-left"></i>
                            </div>
                            <div className="right-arrow">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                </div>
                <div className="featured-product-container">
                    {featureProduct}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        productS: state.products
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        setProducts: () => dispatch(setProductAction.initProducts())
   }    
}
export default connect(mapStateToProps, mapDispatchToProps )(FeaturedProducts)

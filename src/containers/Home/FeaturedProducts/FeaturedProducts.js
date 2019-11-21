import React, { Component } from 'react'
import './FeaturedProducts.css'
import FeatureProduct from './FeatureProduct/FeatureProduct'
import {connect} from 'react-redux'
import *  as  productAction from '../../../store/Products/ProductsAction'
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
                <div className="featurd-product-container" >
                    <div className="featured-product-wrapper">
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

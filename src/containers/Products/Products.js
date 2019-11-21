import React, { Component } from 'react'
import './Products.css'

import {connect} from 'react-redux'
import Product from './Product/Product'
export class Products extends Component {
    render() {
             let product = this.props.productList  ? this.props.productList.map(product =>{
                 return <Product key={product.id} products={product} />
             })
             : <h1>No Product Found!</h1>
        return (
            <div className="product-container">
                {/* <div className="product-filter-container">
                </div> */}
                <div className="product-item-container">
                    <h1>No Product Found!</h1>
                   {product}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        productList: state.productReducers.products
    }
}

const mapDispatchToProps = dispatch =>{

}
export default connect(mapStateToProps, mapDispatchToProps)(Products)

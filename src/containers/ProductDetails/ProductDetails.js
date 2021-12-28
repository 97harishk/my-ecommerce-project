import React, { Component } from 'react'
import './ProductDetails.css'
import {phones} from '../../data/phones'
import {connect} from 'react-redux'
import ProductSnaps from './ProductSnaps/ProductSnaps'
import * as actionTypes from '../../store/ProductList/ProductListAction'
import spinner from '../../components/UI/Spinner/Spinner'
export class ProductDetails extends Component {
    state={
        snapCount: 0
    }
    componentDidMount(){
       
        this.props.initProduct(this.props.match.params.id);
    }
    componentDidUpdate(){
        console.log('[Updated Component]',this.props.product)
    }
     counterHandler = (id) =>{
         this.setState({snapCount: id})
    }
    render() {
    let product = <spinner/>
    product = this.props.product ?
    this.props.product.map(product =>{
    return  <div className="product-details-container">
    <div className="product-details-wraper"> 
            <ProductSnaps image={product.images} click={(id) =>this.counterHandler(id)}/>
        <div className="product-image-wrapper">
            <div className="product-image">
                <img src={product.images[this.state.snapCount]} alt="Product"/>
            </div>
        </div>
        <div className="producrt-desc-wrapper">
            <div className="product-title">
                {product.title}
            </div>
            <div className="product-desc-price">
                <label className="tc">Price:</label> ₹{product.price.toFixed(0)} <del className="tc">4200</del>
            </div>
            <div className="product-description">
                <p>{product.cpu}</p>
                <p>{product.camera}</p>
                <p>{product.size}</p>
                <p>{product.weight}</p>
                <p>{product.display}</p>
                <p>{product.memory}</p>
                <p>{product.screen}</p>
            </div>
        </div>
    </div>
</div>
})
: <h3>Product NOt Found!</h3>
console.log('[render]',product);
        return (
            <div className="product-details-section">
               {product}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        product: state.ProductDetailReducer.product
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        initProduct: (id) => dispatch(actionTypes.initProductDetail(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)

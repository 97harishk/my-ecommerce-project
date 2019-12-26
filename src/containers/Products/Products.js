import React, { Component } from 'react'
import './Products.css'
import * as productAction from '../../store/Products/ProductsAction'
import {connect} from 'react-redux'
import Product from './Product/Product'
import spinner from '../../components/UI/Spinner/Spinner'
export class Products extends Component {
    componentDidMount(){
        this.props.setProducts();
    }
    render() {
            let product  = <spinner/>
                product = this.props.productList  ? this.props.productList.map(product =>{
                 return <Product key={product._id} products={product} />
             })
             : <h1>No Product Found!</h1>
        return (
            <div className="product-container">
                <div className="product-filter">
                    <label>Filter Product</label>
                    <div className="filter-brand-control">
                        <div className="filter-brand-head">
                            <i className="fas fa-minus"></i>
                                <label>Price</label>
                            <i className="fas fa-sync"></i>
                        </div>
                        <div className="filter-brand-wrapper">
                            <div className="filter-item-by-price">
                                <select name="minValue" className="filter-select-item">
                                    <option>Min</option>
                                    <option>₹ 5000</option>
                                    <option>₹ 7000</option>
                                    <option>₹ 10000</option>
                                    <option>₹ 12000</option>
                                    <option>₹ 15000</option>
                                </select>
                                <select name="maxValue" className="filter-select-item">
                                    <option>Max</option>
                                    <option>₹ 5000</option>
                                    <option>₹ 7000</option>
                                    <option>₹ 10000</option>
                                    <option>₹ 12000</option>
                                    <option>₹ 15000</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="filter-brand-control">
                        <div className="filter-brand-head">
                            <i className="fas fa-minus"></i>
                                <label>Brand</label>
                            <i className="fas fa-sync"></i>
                        </div>
                        <div className="filter-brand-wrapper">
                            <div className="filter-item-by-brand">
                                <label htmlFor="check6">Apple</label>
                                <input type="checkbox" id="check6" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                                <label htmlFor="check1">Samsung</label>
                                <input type="checkbox" id="check1" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                            <label htmlFor="check2">Oppo</label>
                                <input type="checkbox" id="check2" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                                <label htmlFor="check3">Vivo</label>
                                <input type="checkbox" id="check3" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                                <label htmlFor="check4">Micromax</label>
                                <input type="checkbox" id="check4" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                                <label htmlFor="check5">Huawei</label>
                                <input type="checkbox" id="check5" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                                <label htmlFor="check7">Asus</label>
                                <input type="checkbox" id="check7" className="filter-check-item"/>
                            </div>
                        </div>
                    </div>
                    <div className="filter-brand-control">
                        <div className="filter-brand-head">
                            <i className="fas fa-minus"></i>
                                <label>Ram</label>
                            <i className="fas fa-sync"></i>
                        </div>
                        <div className="filter-brand-wrapper">
                            <div className="filter-item-by-brand">
                                <label htmlFor="check1gb">1Gb & above</label>
                                <input type="checkbox" id="check1gb" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                                <label htmlFor="check2gb">2Gb & above</label>
                                <input type="checkbox" id="check2gb" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                            <label htmlFor="check3gb">3Gb & above</label>
                                <input type="checkbox" id="check3gb" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                                <label htmlFor="check4gb">4Gb & above</label>
                                <input type="checkbox" id="check4gb" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                                <label htmlFor="check5gb">5Gb & above</label>
                                <input type="checkbox" id="check5gb" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                                <label htmlFor="check6gb">6Gb & above</label>
                                <input type="checkbox" id="check6gb" className="filter-check-item"/>
                            </div>
                        </div>
                    </div>
                    <div className="filter-brand-control">
                        <div className="filter-brand-head">
                            <i className="fas fa-minus"></i>
                                <label>Discount</label>
                            <i className="fas fa-sync"></i>
                        </div>
                        <div className="filter-brand-wrapper">
                            <div className="filter-item-by-brand">
                                <label htmlFor="check1d">5% & above</label>
                                <input type="checkbox" id="check1d" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                                <label htmlFor="check2d">10% & above</label>
                                <input type="checkbox" id="check2d" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                            <label htmlFor="check3d">15% & above</label>
                                <input type="checkbox" id="check3d" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                                <label htmlFor="check4d">25% & above</label>
                                <input type="checkbox" id="check4d" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                                <label htmlFor="check5d">50% & above</label>
                                <input type="checkbox" id="check5d" className="filter-check-item"/>
                            </div>
                            <div className="filter-item-by-brand">
                                <label htmlFor="check6d">75% & above</label>
                                <input type="checkbox" id="check6d" className="filter-check-item"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-control" >
                    <div className="product-head">
                        <label>Total Products found: {product.length}</label>
                        <div className="product-view">
                                <i className="fa fa-th" ></i>
                                <i className="fa fa-align-justify" ></i>
                        </div>
                    </div> 
                    <div className="product-item-container">
                        {product}
                    </div>
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
return{
    setProducts: () => dispatch(productAction.initProducts())
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)

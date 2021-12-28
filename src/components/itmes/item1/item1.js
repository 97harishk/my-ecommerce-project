import React, { Component } from 'react'
import './item.css'
import Image from '../../UI/Image/Image'
import {Link} from 'react-router-dom'
export class item1 extends Component {
    render() {
        return (
            <div className="product-items">
                <div className="product-snap">
                    <Image image={this.props.products.images}/>
                </div>
                <div className="product-name">
                  <Link to={"/productdetails/"+this.props.products._id+"/"+this.props.products.title} className="product-link-style">{this.props.products.title}</Link>
                </div>
                <div className="product-price">
                    ₹ {this.props.products.price.toFixed(0)}
                </div>
                <div className="product-add-to-cart">
                    Add To Cart
                </div>
            </div>
        )   
    }
}

export default item1

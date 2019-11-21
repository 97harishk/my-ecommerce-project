import React, { Component } from 'react'
import './ProductDetails.css'
import {phones} from '../../data/phones'
import ProductSnaps from './ProductSnaps/ProductSnaps'
export class ProductDetails extends Component {
    state={
        snapCount: 0
    }
     counterHandler = (id) =>{
         this.setState({snapCount: id})
    }
    render() {  
        console.log(this.props);
        let id = this.props.match.params.id;    
        let phone  = phones.map(phone =>{
            return phone
        })
        return (
            <div className="product-details-section">
                <div className="product-details-container">
 
                    <div className="product-details-wraper"> 
                            <ProductSnaps image={phones[id ].images} click={(id) =>this.counterHandler(id)}/>
                        <div className="product-image-wrapper">
                            <div className="product-image">
                                <img src={phone[id ].images[this.state.snapCount]} alt="Product"/>
                            </div>
                        </div>
                        <div className="producrt-desc-wrapper">
                            <div className="product-title">
                                {phone[id ].title}
                            </div>
                            <div className="product-desc-price">
                                <label className="tc">Price:</label> ₹{phone[id ].price.toFixed(0)} <del className="tc">4200</del>
                            </div>
                            <div className="product-description">
                                <p>{phone[id].cpu}</p>
                                <p>{phone[id].camera}</p>
                                <p>{phone[id].size}</p>
                                <p>{phone[id].weight}</p>
                                <p>{phone[id].display}</p>
                                <p>{phone[id].memory}</p>
                                <p>{phone[id].screen}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails

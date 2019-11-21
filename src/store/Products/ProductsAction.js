import axios from '../../axios'
import {phones} from '../../data/phones'
export const INIT_PRODUCTS = 'SET_PRODUCTS'
export const INIT_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED'

export const initProductsSuccess = (products) =>{
    let product = Object.assign([], phones.map(phone =>{
        return {...phone, price: 1}
    })) 
        return {
            type: INIT_PRODUCTS,
            products: phones
        }
}
export const initProductsFailed = () =>{
    return {
        type: INIT_PRODUCTS_FAILED,

    }
}
export const  initProducts = () =>{
        return dispatch =>{
         axios.get('http://localhost:8000/api/product')
         .then( response =>{
            dispatch(initProductsSuccess(response.data.product))
         })
         .catch(error =>{
            dispatch(initProductsFailed())
         })
        }
}
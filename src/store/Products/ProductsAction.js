import axios from '../../axios'
//import {phones} from '../../data/phones'
export const INIT_PRODUCTS = 'SET_PRODUCTS'
export const INIT_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED'

export const initProductsSuccess = (phones) =>{
    let product = Object.assign([], phones.map(phone =>{
        return phone
    })) 
        return {
            type: INIT_PRODUCTS,
            products: product
        }
}
export const initProductsFailed = () =>{
    return {
        type: INIT_PRODUCTS_FAILED,

    }
}
export const  initProducts = () =>{
        return dispatch =>{
         //   dispatch(initProductsSuccess())
         axios.get('/product')
         .then( response =>{
            dispatch(initProductsSuccess(response.data.product))
         })
         .catch(error =>{
            dispatch(initProductsFailed())
         })
        }
}
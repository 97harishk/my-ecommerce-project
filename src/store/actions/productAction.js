import * as actionTypes from './actions'
import axios from 'axios'
export const setProducts = (products) =>{
        return {
            type: actionTypes.SET_PRODUCTS,
            products: products
        }
}
export const fetchProductsFailed = () =>{
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED,

    }
}
export const  initProducts = () =>{
    console.log('Hello')
        return dispatch =>{
         axios.get('http://localhost:8000/api/product')
         .then( response =>{
            dispatch(setProducts(response.data.product))
         })
         .catch(error =>{
            dispatch(fetchProductsFailed())
         })
        }
}
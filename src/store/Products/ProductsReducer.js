import * as actionTypes from '../Products/ProductsAction'

const InitialState = {
    products:[],
    error: false
}

const reducers  = (state =InitialState, action ) =>{
    switch(action.type){
        case actionTypes.INIT_PRODUCTS: 
        return {
            ...state,
            products: action.products,
            error: false
        }
        case actionTypes.INIT_PRODUCTS_FAILED : 
        return {
            ...state,
            error: true
        }
        default:
            return{
                ...state
            }
    }
}       
export default reducers
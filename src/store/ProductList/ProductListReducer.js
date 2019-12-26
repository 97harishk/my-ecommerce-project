import * as actionTypes from './ProductListAction'
const initialState = {
    product: null,
    error: false
}

const reducer = (state =  initialState, action) =>{
    switch(action.type){
        case actionTypes.INIT_PRODUCT_DETAILS:
            let product = Object.assign([], action.product)
            return{
                ...state,
                product: product
            }
        case actionTypes.INIT_PRODUCT_DETAILS:
            return{
                ...state,
                error: true
            }
        default:{
            return{
                ...state
            }
        }
    }
}

export default reducer
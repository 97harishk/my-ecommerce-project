import * as actionTypes from './ProductListAction'
const initialState = {
    product: null,
    error: false
}

const reducer = (state =  initialState, action) =>{
    switch(action.type){
        case actionTypes.INIT_PRODUCT_DETAILS:
            return{
                ...state,
                product: action.product
            }
        case actionTypes.INIT_PRODUCT_DETAILS_FAILED:
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
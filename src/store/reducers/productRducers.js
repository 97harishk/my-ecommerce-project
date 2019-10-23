import * as actionTypes from '../actions/actions'

const InitialState = {
    products:[],
    error: false
}

const reducers  = (state =InitialState, action ) =>{
    switch(action.type){
        case actionTypes.SET_PRODUCTS : 
        return {
            ...state,
            product: action.products,
            error: false
        }
        case actionTypes.FETCH_PRODUCTS_FAILED : 
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
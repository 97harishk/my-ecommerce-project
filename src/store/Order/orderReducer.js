import * as actionTypes from './orderAction'

const initialState = {
    orders: null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.INIT_ORDER :{
            return {...state, orders: action.order}
        }
        default:
            return {...state}
    }

}

export default reducer
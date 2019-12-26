import * as actionTypes from './cartAction'

 const initialState = {
     cartItem: null,
     totalPrice: 0
 }
 const reducer  = (state = initialState, action) =>{
    let updatedCart
     switch(action.type){
        case actionTypes.INIT_CART:
            return {...state, cartItem: action.payload, totalPrice: action.totalPrice}
        case actionTypes.INCREMENT_CART_ITEM :
                updatedCart  = Object.assign([] , state.cartItem.map(item =>{
                if(item._id === action.productId){
                    item.itemQuantity++
                    item.subTotal = item.price*item.itemQuantity
                    state.totalPrice +=  item.price
                }
                return item
            }))
            return {...state , cartItem:  updatedCart}
        case actionTypes.DECREMENT_CART_ITEM :
                updatedCart  = Object.assign([] , state.cartItem.map(item =>{
                if(item._id === action.productId){
                    item.itemQuantity--
                    item.subTotal = item.price*item.itemQuantity
                    state.totalPrice -=  item.price
                }
                return item
            }))
            return {...state , cartItem:  updatedCart}  
        default: 
        return {...state}
            
     }
 }

 export default reducer
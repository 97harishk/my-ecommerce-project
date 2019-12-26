import Axios from '../../axios'
export const INIT_CART = 'INIT_CART'
export const INIT_CART_FAILED ='INIT_CART_FAILED'

export const ADD_CART = 'ADD_CART'
export const ADD_CART_FAILED = 'ADD_CART_FAILED'

export const INCREMENT_CART_ITEM = 'INCREMENT_CART_ITEM'
export const DECREMENT_CART_ITEM = 'DECREMENT_CART_ITEM'

const initCartSuccess = (payload, totalPrice) =>{
    return {
        type: INIT_CART,
        payload: payload,
        totalPrice: totalPrice
    }
}

const initCartFailed = () =>{
    return {
        type: INIT_CART_FAILED
    }
}
export const initCart = (userId) =>{
    return dispatch =>{
        Axios.get('/cart/cart-item/'+ userId)
        .then(response =>{
            let totalPrice = 0;
            console.log(response)       
            let cartData = response.data.cart
            cartData = Object.assign([] , cartData.map(item =>{
                totalPrice += item.price
                return {...item, subTotal: item.price ,itemQuantity: 1}
            }))
            dispatch(initCartSuccess(cartData, totalPrice))
        })
        .catch(error =>{
            console.log(error)
            dispatch(initCartFailed())
        })
    }
}
  
export const addProductToCart = (userId, product) =>{
    let productId = {
        productId: product
    }
    return dispatch =>{
        Axios.post('/cart/create-cart/'+userId , productId)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
}

export const removeProductFromCart = (userId, product) =>{
    let productId = {
        productId: product
    }
    return dispatch =>{
        Axios.post('/cart/remove-cart/'+userId , productId)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
export const decrementItemQuantity = (userId, product, qty) =>{
            if(qty <= 1){
                return removeProductFromCart(userId, product);
            }
            else{
                return {
                    type : DECREMENT_CART_ITEM,
                    productId: product
                }
            }
}
export const incrementItemQuantity = (userId, product, qty) =>{
    return dispatch =>{
            dispatch ({type: INCREMENT_CART_ITEM, productId: product})
    }
}
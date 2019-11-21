import menuReducer from './menu/menuReducer'
import ProductReducer from './Products/ProductsReducer'
import authReducer from './auth/authReducer'
import cartReducer from './cart/cartReducer'
import {combineReducers } from 'redux'

const rootReducer = combineReducers({
        menuReducer:  menuReducer,
        productReducers: ProductReducer,
        authReducer: authReducer,
        cartReducer: cartReducer
     })
export default rootReducer
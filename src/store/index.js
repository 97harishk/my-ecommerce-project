import menuReducer from './menu/menuReducer'
import ProductReducer from './Products/ProductsReducer'
import ProductDetailReducer from './ProductList/ProductListReducer'
import authReducer from './auth/authReducer'
import cartReducer from './cart/cartReducer'
import orderReducer from './Order/orderReducer'
import {combineReducers } from 'redux'

const rootReducer = combineReducers({
        menuReducer:  menuReducer,
        productReducers: ProductReducer,
        authReducer: authReducer,
        cartReducer: cartReducer,
        orderReducer: orderReducer,
        ProductDetailReducer: ProductDetailReducer
     })
export default rootReducer
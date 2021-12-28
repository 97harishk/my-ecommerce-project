import Axios from "../../axios"
export const INIT_PRODUCT_DETAILS = 'INIT_PRODUCT_DETAILS'
export const INIT_PRODUCT_DETAILS_FAILED = 'INIT_PRODUCT_DETAILS_FAILED'
const initProductDetailSuccess = (data) =>{
    return {
        type: INIT_PRODUCT_DETAILS,
        product: data
    }
}
const initProductDetailFailed = () =>{
    return{
        type: INIT_PRODUCT_DETAILS_FAILED
    }
}
export const initProductDetail = (id) =>{
    return dispatch =>{
        Axios.get('/product/'+id)
        .then(response =>{
            dispatch(initProductDetailSuccess(response.data.product))
        })
        .catch(error =>{
            dispatch(initProductDetailFailed())
        })
    }
}
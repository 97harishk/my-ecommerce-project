import Axios from '../../axios'

export const INIT_ORDER = 'INIT_ORDER'
export const INIT_ORDER_FAILED = 'INIT_ORDER_FAILED'

export const ORDER_ADDED = 'ORDER_ADDED'

export const addOrder = (localId, order) =>{
    order = {...order, localId: localStorage.getItem('localId')}
    return dispatch =>{
        Axios.post('order/create-order/' + localId, order)
        .then(response =>{
    
            console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

}
const initOrderSuccess = (orders) =>{
   return{
       type: INIT_ORDER,
       order: orders
   }
}
const initOrderFailed = (error) =>{
    return{
        type: INIT_ORDER_FAILED
    }
}

export const initOrder = (localId) =>{
    console.log(localId);
    return dispatch =>{
        Axios.get(`order/${localId}`)
        .then(response =>{
            dispatch(initOrderSuccess(response.data.order))
        })
        .catch(error =>{
            dispatch(initOrderFailed(error))
        })
    }
}
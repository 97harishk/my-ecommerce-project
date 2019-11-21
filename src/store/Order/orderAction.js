import Axios from '../../axios'

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
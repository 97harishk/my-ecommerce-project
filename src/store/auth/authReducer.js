import * as actionTypes from './authAction'

const initialState = {
    token: '',
    localId: '',
    authenticated: false
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.LOGIN_SUCCESS :
            return ({...state, ...action.payload, authenticated: true  })
        case actionTypes.LOGIN_FAILED :
        case actionTypes.LOGOUT_SUCCESS :
            return ({...state, message: action.message, localId: '', authenticated: false})
        case actionTypes.REGISTER_SUCCESS:
            return({...state, ...action.payload, authenticated: true})
        default :
        return ({...state})
    }
}

export default reducer
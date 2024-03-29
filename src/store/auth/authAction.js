import Axios from "../../axios"

export const SET_USER_INPUT = 'SET_USER_INPUT' 

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_INVALID = 'LOGIN_INVALID'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILED = 'REGISTER_FAILED'

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILED = 'LOGOUT_FAILED'

const loginSuccess = (response) =>{
        return{
            type: LOGIN_SUCCESS,
            payload: response.data
        }
}
const loginFail = () =>{
    return{
        type: LOGIN_FAILED,
        message: 'Invalid User Name or Password!'
    }
}
export const login = (user) =>{
    return dispatch =>{
        Axios.post('/user/login', user)
        .then(response =>{
            console.log(response);
            localStorage.setItem('localId', response.data.localId)
            localStorage.setItem('token', response.data.token)
            dispatch(loginSuccess(response))
        })
        .catch(error =>{
            console.log(error)
            dispatch(loginFail())
        })
    }
}
export const autologin = (token, localId) =>{
    return dispatch =>{
        Axios.post('/user/autoLogin/'+ localId)
        .then(response =>{
            dispatch(loginSuccess(response))
        })
        .catch(error =>{
            dispatch(loginFail())
        })
    }
}

export const logOut = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('localId');
    return dispatch =>{
        dispatch({type: LOGOUT_SUCCESS})
    }
}

export const checkAuthentication = () =>{
    return dispatch =>{
        const token = localStorage.getItem('token');
        const localId = localStorage.getItem('localId');
        if(!token){
            dispatch(logOut());
        }
        if(localId){
            dispatch(autologin(token, localId))
        }
    }

}

const registerSuccess = (user) =>{
    return {
        type: REGISTER_SUCCESS,
        payload: user
    }
}

const registerFailed = () =>{
    return {
        type: REGISTER_FAILED
    }
}

export const register= (user) =>{
    console.log(user)
    return (dispatch) =>{
        Axios.post('/user/register', user)
        .then(response =>{
            console.log(response.data)
            dispatch(registerSuccess(response.data.user))
        })
        .catch(err =>{
            console.log(err)
            dispatch(registerFailed());
        })
    }
}
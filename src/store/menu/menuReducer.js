import * as actionTypes from './menuAction'
const initialState = {
    menu: []
}

const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case actionTypes.INIT_MENU :
            return ( {...state, menu: action.menu} )
        case actionTypes.INIT_MENU_FAILED :
            return ( {...state, menu: action.menu} )
        default :
        return ({...state})
    }
}

export default reducer
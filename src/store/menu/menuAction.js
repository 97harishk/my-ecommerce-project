import Axios from 'axios'
export const INIT_MENU = 'INIT_MENU'
export const INIT_MENU_FAILED = 'INIT_MENU_FAILED'

export const initMenuSuccess = (menu) => {
    return {
        type: INIT_MENU,
        menu: menu
    }
}
export const initMenuFailed = () => {
    return {
        type: INIT_MENU_FAILED
    }
}
export const initMenu = () => {
    return dispatch =>{
        Axios.get('http://localhost:8000/api/menu')
        .then(response => {
            dispatch(initMenuSuccess(response.data.menu))
        })
        .catch(error => {
            dispatch(initMenuFailed())
        })
    }

}
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from '../action/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false
}

export default function authReducer (state = initialState, action) {
    const { type, payload } = action
    
    switch (type) {
        case LOGIN_SUCCESS: 
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                token: payload.accessToken
            }
        case REGISTER_SUCCESS: 
            return {
                ...state,
                isAuthenticated: false,
                loading: true
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state
    }
}
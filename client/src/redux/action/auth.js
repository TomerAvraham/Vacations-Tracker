import { setAlert } from './alert'
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
} from './types'

export const login = (username, password) => async dispatch => {
    try{
        const res = await fetch("http://localhost:1000/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userName: username, password})
        })
        const data = await res.json()

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })

        dispatch(setAlert('Authenticated successfully', 'success'))

    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })

        dispatch('Error Authenticated', 'error')
    }
}

export const register = (firstName, lastName, userName, password) => async dispatch => {
    try {
        const res = await fetch('http://localhost:1000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName, lastName, userName, password})
        })
        const data = await res.json()

        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })

        dispatch(login(userName, password))
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL
        })

        dispatch(setAlert('Error Creating user', 'error'))
    }
}

export const logout = () => dispatch => {
    dispatch(setAlert('Logout successfully', 'success'))
    dispatch({type: LOGOUT})
}
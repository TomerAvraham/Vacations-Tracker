import { LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from "./types";

const API_URL = "http://localhost:5000/api/auth/";

export const login = ({ username, password }) => async (dispatch) => {
  try {
    const res = await fetch(API_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();

    if (res.status >= 400) {
      return dispatch({
        type: LOGIN_FAIL,
        payload: data,
      });
    }
    const { accessToken, userInfo } = data;

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("accessToken", JSON.stringify(accessToken));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
      error: null,
    });
  } catch {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const register = (user) => async (dispatch) => {
  const { username, lastName, firstName, password } = user
  try {
    const res = await fetch(API_URL + 'register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        lastName,
        firstName,
        password
      })
    })

    const data = await res.json()

    if (res.status >= 400) {
      return dispatch({
        type: REGISTER_FAIL,
        payload: data
      })
    } else {
      return dispatch({
        type: REGISTER_SUCCESS,
        payload: data
      })
    }
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.message
    })
  }
}

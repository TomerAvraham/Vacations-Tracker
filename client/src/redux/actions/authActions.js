import { LOGIN_FAIL, LOGIN_SUCCESS } from "./types";

const API_URL = "http://localhost:5000/api/auth/";

export const login = ({ username, password }) => async (dispatch) => {
  try {
    const res = await fetch(API_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password}),
    });
    const data = await res.json();
    
    if (res.status >= 400) {
      return dispatch({
        type: LOGIN_FAIL,
        payload: data
      });
    }
    
    localStorage.setItem("user", JSON.stringify(data));
    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data, error: null
    });
  } catch {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

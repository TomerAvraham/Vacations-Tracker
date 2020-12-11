import { SET_VACATIONS_FAIL, SET_VACATIONS_SUCCESS } from "./types";

const API_URL = "http://localhost:5000/api/vacations/";
const config = {
  "Content-Type": "application/json",
  "x-access-token": JSON.parse(localStorage.getItem("accessToken")),
};

export const fetchVacations = () => async (dispatch) => {
  try {
    const res = await fetch(API_URL + "all", {
      method: "GET",
      headers: config,
    });
    const data = await res.json();

    if (res.status >= 400) {
      return dispatch({
        type: SET_VACATIONS_FAIL,
        payload: data,
      });
    }

    dispatch({
      type: SET_VACATIONS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: SET_VACATIONS_FAIL,
    });
  }
};

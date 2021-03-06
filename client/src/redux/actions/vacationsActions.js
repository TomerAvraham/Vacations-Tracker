import {
  SET_VACATIONS_FAIL,
  SET_VACATIONS_SUCCESS,
  ADD_VACATION,
  DELETE_VACATION,
  EDIT_VACATION,
} from "./types";
import { configHeaders } from "../../helpers/configHeaders";

const API_URL = "https://vacations-server-heroku.herokuapp.com/api/vacations/";

export const fetchVacations = () => async (dispatch) => {
  try {
    const res = await fetch(API_URL + "all", {
      method: "GET",
      headers: configHeaders(),
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
    if (err) throw err;
    dispatch({
      type: SET_VACATIONS_FAIL,
    });
  }
};

export const addVacation = ({
  description,
  destination,
  photoUrl,
  price,
  fromDate,
  toDate,
}) => async (dispatch) => {
  try {
    const res = await fetch(API_URL + "add", {
      method: "POST",
      headers: configHeaders(),
      body: JSON.stringify({
        description,
        destination,
        photoUrl,
        price,
        fromDate,
        toDate,
      }),
    });

    const data = await res.json();

    dispatch({
      type: ADD_VACATION,
      payload: data.newVacation,
    });
  } catch (err) {
    if (err) throw err;
  }
};

export const deleteVacation = (id) => async (dispatch) => {
  try {
    const res = await fetch(API_URL + `delete/${id}`, {
      method: "DELETE",
      headers: configHeaders(),
    });

    const data = await res.json();

    dispatch({
      type: DELETE_VACATION,
      payload: Number(data.deletedVacationId),
    });
  } catch (err) {
    if (err) throw err;
  }
};

export const editVacation = (
  id,
  { description, destination, photoUrl, price, fromDate, toDate }
) => async (dispatch) => {
  try {
    const res = await fetch(API_URL + `edit/${id}`, {
      method: "PUT",
      headers: configHeaders(),
      body: JSON.stringify({
        description,
        destination,
        photoUrl,
        price,
        fromDate,
        toDate,
      }),
    });

    const data = await res.json();

    dispatch({
      type: EDIT_VACATION,
      payload: data.editVacation,
    });
  } catch (err) {
    if (err) throw err;
  }
};

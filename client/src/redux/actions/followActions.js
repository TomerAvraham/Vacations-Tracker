import { FOLLOW_VACATION, UNFOLLOW_VACATION, SET_FOLLOWERS } from "./types";
import { configHeaders } from "../../helpers/configHeaders";

const API_URL = "http://localhost:5000/api/followers/";

export const followVacation = (vacationId) => async (dispatch) => {
  try {
    await fetch(API_URL + `follow/${vacationId}`, {
      method: "POST",
      headers: configHeaders(),
    });

    dispatch({
      type: FOLLOW_VACATION,
      payload: vacationId,
    });
  } catch (err) {
    console.error(err);
  }
};

export const unFollowVacation = (vacationId) => async (dispatch) => {
  try {
    await fetch(API_URL + `unfollow/${vacationId}`, {
      method: "DELETE",
      headers: configHeaders(),
    });
    dispatch({
      type: UNFOLLOW_VACATION,
      payload: vacationId,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchAllFollowers = () => async (dispatch) => {
  try {
    const res = await fetch(API_URL + "all", {
      method: "GET",
      headers: configHeaders(),
    });
    const data = await res.json();
    dispatch({
      type: SET_FOLLOWERS,
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

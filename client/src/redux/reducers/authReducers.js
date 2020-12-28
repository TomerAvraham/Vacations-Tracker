import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  GET_TOKEN,
} from "../actions/types";
import jwt_decode from "jwt-decode";

export const loginReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      const userInfo = jwt_decode(payload.accessToken);
      return {
        userInfo: userInfo,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
      };
    case LOGIN_FAIL:
      return {
        error: payload,
      };
    case GET_TOKEN:
      console.log(payload);
      const newUserInfo = jwt_decode(payload);
      localStorage.setItem("accessToken", JSON.stringify(payload));
      return {
        ...state,
        userInfo: newUserInfo,
        accessToken: payload,
      };
    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        message: payload.message,
      };
    case REGISTER_FAIL:
      return {
        message: payload.message,
      };
    default:
      return state;
  }
};

import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions/types";

export const loginReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        userInfo: payload,
      };
    case LOGIN_FAIL:
      return {
        error: payload,
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

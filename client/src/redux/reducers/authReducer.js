import { LOGIN_FAIL, LOGIN_SUCCESS } from "../actions/types";

const authReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        auth: payload
      };
    case LOGIN_FAIL:
      return {
        error: payload
      };
    default:
      return state;
  }
};

export default authReducer

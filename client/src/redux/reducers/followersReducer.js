import { SET_FOLLOWERS } from "../actions/types";

export const followersReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FOLLOWERS:
      return payload;
    default:
      return state;
  }
};

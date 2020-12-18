import {
  SET_VACATIONS_FAIL,
  SET_VACATIONS_SUCCESS,
  ADD_VACATION,
  DELETE_VACATION,
} from "../actions/types";

export const vacationReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_VACATIONS_SUCCESS:
      return {
        vacations: payload.vacations,
      };

    case SET_VACATIONS_FAIL:
      return {
        error: payload,
      };

    case ADD_VACATION:
      console.log(state.vacations);
      console.log(payload);
      return {
        vacations: state.vacations.push(payload),
      };

    case DELETE_VACATION:
      console.log(state.vacations);
      return {
        ...state,
        vacations: state.vacations.filter((v) => v.id !== payload),
      };

    default:
      return state;
  }
};

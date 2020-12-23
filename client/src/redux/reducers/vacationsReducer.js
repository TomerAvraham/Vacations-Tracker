import {
  SET_VACATIONS_FAIL,
  SET_VACATIONS_SUCCESS,
  ADD_VACATION,
  DELETE_VACATION,
  EDIT_VACATION,
  FOLLOW_VACATION,
  UNFOLLOW_VACATION,
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

    case FOLLOW_VACATION:
      const followIndex = state.vacations.findIndex(
        (v) => v.id === Number(payload)
      );
      state.vacations[followIndex] = {
        ...state.vacations[followIndex],
        isUserFollow: true,
      };
      state.vacations[followIndex].followers++;
      state.vacations
        .sort(function (x, y) {
          return x.isUserFollow - y.isUserFollow;
        })
        .reverse();
      return { ...state };

    case UNFOLLOW_VACATION:
      const unfollowIndex = state.vacations.findIndex(
        (v) => v.id === Number(payload)
      );
      state.vacations[unfollowIndex] = {
        ...state.vacations[unfollowIndex],
        isUserFollow: false,
      };
      state.vacations[unfollowIndex].followers--;
      state.vacations
        .sort(function (x, y) {
          return x.isUserFollow - y.isUserFollow;
        })
        .reverse();
      return { ...state };

    case ADD_VACATION:
      const newVacations = state.vacations;
      newVacations.push(payload);
      return {
        vacations: newVacations,
      };

    case DELETE_VACATION:
      const afterDelete = state.vacations.filter((v) => v.id !== payload);
      return {
        vacations: afterDelete,
      };

    case EDIT_VACATION:
      const editVacationIndex = state.vacations.findIndex(
        (v) => v.id === payload.id
      );
      state.vacations[editVacationIndex] = payload;
      return {
        vacations: state.vacations,
      };

    default:
      return state;
  }
};

import { SET_VACATIONS_FAIL, SET_VACATIONS_SUCCESS } from "../actions/types";

export const vacationReducer = (state = [], action) => {
    const { type, payload } = action
    
    switch (type) {
        case SET_VACATIONS_SUCCESS: 
            return payload.vacations
            
        case SET_VACATIONS_FAIL:
            return 
        default:
            return state    
    }
}
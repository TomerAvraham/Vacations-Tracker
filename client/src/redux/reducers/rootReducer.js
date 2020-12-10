import { combineReducers } from "redux";
import authReducers from './authReducer'

const rootReducer = combineReducers({authReducers: authReducers})

export default rootReducer
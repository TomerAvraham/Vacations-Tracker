import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginReducer, registerReducer } from "./reducers/authReducers";
import { vacationReducer } from "./reducers/vacationsReducer";
import { followersReducer } from "./reducers/followersReducer";
import jwt_decode from "jwt-decode";

const reducer = combineReducers({
  userLogin: loginReducer,
  userRegister: registerReducer,
  vacationsList: vacationReducer,
  vacationsFollowers: followersReducer,
});

const userInfo = localStorage.getItem("accessToken")
  ? jwt_decode(JSON.parse(localStorage.getItem("accessToken")))
  : null;

const accessToken = localStorage.getItem("accessToken")
  ? JSON.parse(localStorage.getItem("accessToken"))
  : null;

const refreshToken = localStorage.getItem("refreshToken")
  ? JSON.parse(localStorage.getItem("refreshToken"))
  : null;

const initialState = {
  vacationsList: {
    vacations: [],
    error: null,
  },
  userLogin: {
    accessToken: accessToken,
    refreshToken: refreshToken,
    userInfo: userInfo,
    error: null,
  },
};

const middleware = applyMiddleware(thunk);

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(middleware)
);

export default store;

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginReducer, registerReducer } from "./reducers/authReducers";

const reducer = combineReducers({
  userLogin: loginReducer,
  userRegister: registerReducer,
});

const userInfo = localStorage.getItem("userInfo")
  ? JSON.stringify(localStorage.getItem("userInfo"))
  : null;

const accessToken = localStorage.getItem("accessToken")
  ? JSON.stringify(localStorage.getItem("accessToken"))
  : null;

const initialState = {
  vacations: [],
  userLogin: {
    userInfo: userInfo,
    accessToken: accessToken,
    error: null,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

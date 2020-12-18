import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginReducer, registerReducer } from "./reducers/authReducers";
import { vacationReducer } from "./reducers/vacationsReducer";

const reducer = combineReducers({
  userLogin: loginReducer,
  userRegister: registerReducer,
  vacationsList: vacationReducer,
});

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const accessToken = localStorage.getItem("accessToken")
  ? JSON.parse(localStorage.getItem("accessToken"))
  : null;

const initialState = {
  vacationsList: {
    vacations: [],
    error: null,
  },
  userLogin: {
    accessToken: accessToken,
    userInfo: userInfo,
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

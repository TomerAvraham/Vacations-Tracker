import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer.js";

const initialState = {
  vacations: [],
  auth: {
    userInfo: null,
    accessToken: JSON.stringify(localStorage.getItem("accessToken")),
  },
  error: null,
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

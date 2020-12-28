import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "./redux/actions/authActions";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import VacationsPage from "./components/VacationsPage/VacationsPage";
import ReportPage from "./components/ReportPage/ReportPage";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const refresh = () => {
    setTimeout(function () {
      window.location.reload();
    }, 100);
  };

  useEffect(() => {
    if (userInfo !== null) {
      if (new Date(userInfo.exp * 1000) <= new Date()) {
        dispatch(getAccessToken(refreshToken));
        refresh();
      }
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route
          exact
          path="/report"
          render={() => (userInfo ? <ReportPage /> : <Redirect to="/login" />)}
        />
        <Route
          exact
          path="/vacations"
          render={() =>
            userInfo ? <VacationsPage /> : <Redirect to="/login" />
          }
        />
      </Switch>
    </div>
  );
};

export default App;

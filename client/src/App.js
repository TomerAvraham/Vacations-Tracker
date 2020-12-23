import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import VacationsPage from "./components/VacationsPage/VacationsPage";
import ReportPage from "./components/ReportPage/ReportPage";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/report" component={ReportPage} />
        <Route exact path="/vacations" component={VacationsPage} />
      </Switch>
    </div>
  );
};

export default App;

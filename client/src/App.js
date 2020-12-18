import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import VacationsPage from "./components/pages/VacationsPage/VacationsPage";
import PrivetRoute from './PrivateRoute'
import Navbar from './components/Navbar/Navbar'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Navbar/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivetRoute exact path="/vacations" component={VacationsPage}/>
        </Switch>
    </div>
  );
};

export default App;

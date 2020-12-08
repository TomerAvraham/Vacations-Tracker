import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import VacationsPage from "./components/pages/VacationsPage/VacationsPage";
import Wrapper from "./components/Layout/Wrapper ";

const App = () => {
  return (
    <div className="App">
      <Wrapper>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/vacations" component={VacationsPage} />
        </Switch>
      </Wrapper>
    </div>
  );
};

export default App;

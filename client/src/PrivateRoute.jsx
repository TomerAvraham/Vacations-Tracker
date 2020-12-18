import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ components: Component, ...rest }) => {
    const token = localStorage.getItem("accessToken")
    console.log(token)
  return (
    <Route {...rest} render={props => (
      token ? <Component {...props} /> 
      : <Redirect to="/login" />
    )} />
  )
};

export default PrivateRoute;

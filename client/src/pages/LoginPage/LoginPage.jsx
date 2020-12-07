import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const LoginPage = () => {

  // const []

  return (
    <div className="login__form">
      <TextField name="username" label="Username" />
      <TextField name="password" label="Password" />
    </div>
  );
};

export default LoginPage;

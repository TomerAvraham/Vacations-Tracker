import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./LoginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({});

  const handelChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="login__container">
      <div className="login__form">
        <TextField onChange={e => handelChange(e)} name="username" label="Username" type="text"/>
        <TextField onChange={e => handelChange(e)} name="password" label="Password" type="password"/>
        <Button variant="contained" color="primary">
          SignIn
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;

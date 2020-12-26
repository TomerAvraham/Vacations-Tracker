import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { message } = userRegister;

  const handelChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <div className="register__container">
      <div className="side__container">
        <div className="side__inner">
          <h1>Welcome Back!</h1>
          <p>To keep on track our awesome vacations </p>
          <Link className="link" to="/login">
            <Button id="side__btn">SIGN IN</Button>
          </Link>
        </div>
      </div>
      <div className="form__wrapper">
        <div className="form__alert">
          {message && (
            <Alert severity={message.includes("success") ? "success" : "error"}>
              {message}
            </Alert>
          )}
        </div>
        <form className="register__form" onSubmit={(e) => handelSubmit(e)}>
          <TextField
            className="form__inputs"
            onChange={(e) => handelChange(e)}
            name="firstName"
            label="First Name"
            variant="outlined"
          />
          <TextField
            className="form__inputs"
            onChange={(e) => handelChange(e)}
            name="lastName"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            className="form__inputs"
            onChange={(e) => handelChange(e)}
            name="username"
            label="username"
            variant="outlined"
          />
          <TextField
            className="form__inputs"
            onChange={(e) => handelChange(e)}
            type="password"
            name="password"
            label="Password"
            variant="outlined"
          />
          <Button type="submit" variant="contained">
            REGISTER
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

import React, { useState } from "react";
import "./RegisterPage.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";

const RegisterPage = () => {
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { message } = userRegister;

  console.log(userRegister);

  const handelChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <div className="register__container">
      <form className="register__form" onSubmit={(e) => handelSubmit(e)}>
        <div className="form__alert">
          {message && (
            <Alert severity={message.includes("success") ? "success" : "error"}>
              {message}
            </Alert>
          )}
        </div>
        <TextField
          onChange={(e) => handelChange(e)}
          name="firstName"
          label="First Name"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handelChange(e)}
          name="lastName"
          label="Last Name"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handelChange(e)}
          name="username"
          label="username"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handelChange(e)}
          type="password"
          name="password"
          label="Password"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;

import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/actions/authActions";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.auth);
  // const { error, userInfo } = user

  console.log(user);

  useEffect(() => {
    if (user) {
      console.log("im here");
      history.push("/vacations");
    }
  }, [user, history]);

  const handelChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="login__container">
      <form onSubmit={(e) => handelSubmit(e)} className="login__form">
        <TextField
          onChange={(e) => handelChange(e)}
          name="username"
          label="Username"
          type="text"
          required
        />
        <TextField
          onChange={(e) => handelChange(e)}
          name="password"
          label="Password"
          type="password"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          SignIn
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;

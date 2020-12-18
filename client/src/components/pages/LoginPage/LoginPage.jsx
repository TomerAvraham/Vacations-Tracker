import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/actions/authActions";
import { useHistory, Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/vacations");
    }
  }, [userInfo, history]);

  const handelChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="login__container">
      <div className="overlay">
        <form onSubmit={(e) => handelSubmit(e)} className="login__form">
          <div className="login__alert">
            {error && <Alert className="alert" severity="error">{error.message}</Alert>}
          </div>
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
            Sign In
          </Button>

          <p>Don't have account? <Link to="/register">Register</Link></p>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;

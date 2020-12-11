import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  console.log(userInfo)
  console.log(userInfo && userInfo.username)
  return (
    <AppBar id="navbar" elevation={0}>
      <Toolbar className="navbar__wrapper">
        <Typography>MyLogo.</Typography>
        <div className="navbar__elements">
          <div className="navbar__greeting">
            <Typography>Hello, {userInfo ? userInfo.username : "Guest"}</Typography>     
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

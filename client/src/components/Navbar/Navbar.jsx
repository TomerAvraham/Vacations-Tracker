import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const renderLinks = () => {
    if (userInfo && !userInfo.user.admin) {
      return [
        <li onClick={logout}>
          <p>Logout</p>
        </li>,
      ];
    } else if (userInfo && userInfo.user.admin) {
      return [
        <li>
          <NavLink className="navbar__link" to="/vacations">
            vacations
          </NavLink>
        </li>,
        <li>
          <NavLink className="navbar__link" to="/report">
            report
          </NavLink>
        </li>,
        <li onClick={logout}>
          <p>Logout</p>
        </li>,
      ];
    }
  };

  return (
    <AppBar id="navbar" elevation={0}>
      <Toolbar className="navbar__wrapper">
        <h1 className="navbar__logo">I-Travel</h1>
        <div className="navbar__elements">
          <ul className="navbar__links">{renderLinks()}</ul>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

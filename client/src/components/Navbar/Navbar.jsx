import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const renderLinks = () => {
    if (userInfo && !userInfo.admin) {
      return [
        <li onClick={logout}>Logout</li>,
        <li>hi {userInfo.username}</li>,
      ];
    } else if (userInfo && userInfo.admin) {
      return [
        <li>
          <Link className="navbar__link" to="/vacations">
            vacations
          </Link>
        </li>,
        <li>
          <Link className="navbar__link" to="/report">
            report
          </Link>
        </li>,
        <li onClick={logout}>Logout</li>,
      ];
    } else {
      return [
        <li>
          <Link className="navbar__link" to="/login">
            login
          </Link>
        </li>,
        <li>
          <Link className="navbar__link" to="/register">
            register
          </Link>
        </li>,
      ];
    }
  };

  return (
    <AppBar id="navbar" elevation={0}>
      <Toolbar className="navbar__wrapper">
        <h1 className="navbar__logo">
          My<span>Logo.</span>
        </h1>
        <div className="navbar__elements">
          <ul className="navbar__links">{renderLinks()}</ul>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <AppBar className="navbar" position="static">
        <Toolbar className="navbar__wrapper" variant="dense">
          <Typography variant="h6" color="inherit">
            Vacations
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

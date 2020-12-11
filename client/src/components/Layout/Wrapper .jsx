import React from "react";
import Navbar from "./Navbar";
import "./Layout.css";

const Wrapper = (props) => {
  return (
    <div className="wrapper__container">
      <Navbar />
      {props.children}
    </div>
  );
};

export default Wrapper;

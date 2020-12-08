import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Layout.css";

const Wrapper = (props) => {
  console.log(props);
  return (
    <div className="wrapper__container">
      <Navbar />
      {props.children}
      <Footer/>
    </div>
  );
};

export default Wrapper;

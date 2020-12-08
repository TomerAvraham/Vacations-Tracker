import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing__container">
      <div className="overlay">
        <div className="inner__container">
          <h1>Hello Traveler</h1>
          <p>Looking for your next adventure?</p>
          <div className="inner__container__btn">
            <Link className="inner__container__link" to="/register">
              <Button size="medium">Get Started</Button>
            </Link>
            <Link className="inner__container__link" to="/login">
              <Button size="medium">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

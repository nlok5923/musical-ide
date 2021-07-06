import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="header">
          <img
            className="header-bg-1"
            src="asset/images/bg-img-1.svg"
            alt="bg-1"
          />
          <div className="header-element">About us</div>
        </div>
        <div className="center">
          <div className="center-logo">
            <img src="asset/images/logo.svg" alt="logo" />
          </div>
          <div className="center-app-name">
            <img
              src="asset/images/app-name.svg"
              className="center-app-name-logo"
              alt="app-name"
            />
          </div>
          <div className="center-about-app">
            <p>
              This is the unique online IDE (intergrated development enviroment) which is 
              integrated with music players and also offers support for compilation and run time 
              execution of several languages such as C++, python, Java, C code. This IDE is integrated 
              with a music player which enables your to hear your favourite songs at the moment you were coding. 
            </p>
          </div>
          <NavLink to="/ide">
          <button className="center-button">Start</button>
          </NavLink>
        </div>
        <div className="footer">
          <img src="asset/images/bg-img-2.svg" alt="bg-2" />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./Home.scss";

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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, s
            </p>
          </div>
          <button className="center-button">Start</button>
        </div>
        <div className="footer">
          <img src="asset/images/bg-img-2.svg" alt="bg-2" />
        </div>
      </div>
    </div>
  );
};

export default Home;

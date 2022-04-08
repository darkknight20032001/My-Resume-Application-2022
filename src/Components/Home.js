import React from "react";
import myDatabase from "../myDatabase/myDatabase";
import Image from "./Image";

import TypeWriter from "./TypeWriter";
import MyLinks from "./MyLinks";
import "./Home.css";
const Home = () => {
  return (
    <div className="MainPage">
      <div className="myAbout">
        {/* <h1 className="Greeting">🙏 NAMASTE 🙏</h1> */}
        <Image />
        <div className="about_me">
          <h2>
            This is <TypeWriter>{myDatabase.myName}</TypeWriter>
          </h2>
          <h3>
            <TypeWriter>{myDatabase.myJobName}</TypeWriter>
          </h3>
        </div>
      </div>
      <MyLinks />
    </div>
  );
};

export default Home;

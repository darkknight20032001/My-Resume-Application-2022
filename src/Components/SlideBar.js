import React from "react";
import "./SlideBar.css";
import { Link } from "react-router-dom";
const SlideBar = () => {
  return (

      <ul className="navbar">
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/myprojects">My Projects</Link>
        </li>
        <li>
          <Link to="/contactme">Contact Me</Link>
        </li>
        <div className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </ul>

  );
};

export default SlideBar;

import React, { useState } from "react";
import "./SlideBar.css";
import { Link } from "react-router-dom";
const SlideBar = () => {
  const [Toggle, setToggle] = useState(false);

  Toggle ? console.log("Done") : console.log("Not Done");

  return (
    <ul className="navbar">
      <li className="navbar">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar">
        <Link to="/about">About</Link>
      </li>
      <li className="navbar">
        <Link to="/myprojects">My Projects</Link>
      </li>
      <li className="navbar">
        <Link to="/contactme">Contact Me</Link>
      </li>
      <div
        className="burger"
        onClick={() => {
          setToggle(!Toggle);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        {Toggle && (
          <ul className="ul-toggle">
            <li>
              <Link to="/">Home</Link>
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
          </ul>
        )}
      </div>
    </ul>
  );
};

export default SlideBar;

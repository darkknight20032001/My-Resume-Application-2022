import React from "react";
import myDatabase from "../myDatabase/myDatabase.js";
import './Image.css';
const Image = () => {
  return (
    <div className="MyProfilePic">
      <img className="MyProfilePic" src={myDatabase.myProfilePic} />
    </div>
  );
};

export default Image;

import React, { useEffect } from "react";
import MyLinks from "./MyLinks";
import Image from "./Image";
import myDatabase from "../myDatabase/myDatabase";
import myDatabase2 from "../myDatabase/myDatabase2";
import { mySkills } from "../myDatabase/myDatabase2";
import Aos from "aos";
import "aos/dist/aos.css";
import "./About.css";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="MainPage2">
      <div className="myInfo" data-aos="fade-right">
        <h3>{myDatabase.myInfo}</h3>
        <Image />
      </div>

      <h1 className="Education">EDUCATION</h1>
      <br/><br/>
      <div className="credentials" data-aos="fade-right">
        {myDatabase2.map((Informations) => {
          return (
            <div className="MyInformation">
              <h2>{Informations.CourseName}</h2>
              <h3>{Informations.InstitutionName}</h3>
              <p>{Informations.InstutionAddress}</p>
              <span>{Informations.myMarks}</span>
            </div>
          );
        })}
      </div>
      <div className="Skillings">
      <h1 className="skills_head">MY SKILLS</h1>
      <div className="MySkillsWrap" data-aos="fade-right">
        {mySkills.map((skill) => {
          return (
            <div className="MySkills">
              <h3>{skill.ProgrammingLanguageName}</h3>
              <div className="skills">
                <div style={{ width: skill.ProgrammingLanguageRating }}></div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      <MyLinks />
    </div>
  );
};

export default About;

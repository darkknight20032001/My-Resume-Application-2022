import React, { useState, useEffect } from "react";
import { myprojects } from "../myDatabase/myDatabase2";
import "./MyProjects.css";
import Aos from "aos";
import "aos/dist/aos.css";

const tools = ["All", ...new Set(myprojects.map((data) => data.ProjectType))];
const MyProjects = () => {
  const [data, setData] = useState(myprojects);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const onClickHandler = (item) => {
    if (item === "All") {
      setData(myprojects);
    } else {
      const filteredData = myprojects.filter((i) => i.ProjectType === item);
      setData(filteredData);
    }
  };
  console.log(data);
  return (
    <>
      <ul className="ProjectLists">
        {tools.map((item, id) => (
          <li key={id} onClick={() => onClickHandler(item)}>
            {item}
          </li>
        ))}
      </ul>

      <div className="project_section" data-aos="fade-right">
        {data.map((item, id) => {
          return (
            <div className="ProjectLists" key={id}>
              <h2>{item.ProjectName}</h2>
              
              <a href={item.ProjectLink} target="_blank" rel="noreferrer" >
                <img src={item.ProjectImage} width="120rem" alt="hi" />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyProjects;

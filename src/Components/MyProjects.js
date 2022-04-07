import React, { useState } from "react";
import { myprojects } from "../myDatabase/myDatabase2";
import "./MyProjects.css";
const tools = ["All",...new Set(myprojects.map((data) => data.ProjectType))];
const MyProjects = () => {
  const [activeTools, setActiveTools] = useState("All");
  const [data, setData] = useState(myprojects);
  const onClickHandler = (item) => {
    if (item === "All") {
      setData(myprojects);
    }else{
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

      <div className="project_section">
        {data.map((item, id) => {
          return (
            <div className="ProjectLists" key={id}>
              <h2>{item.ProjectName}</h2><br/>
              <a href={item.ProjectLink} target="_blank">
                <img src={item.ProjectImage} width="120rem" />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyProjects;

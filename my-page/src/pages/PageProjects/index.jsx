import React from "react";
import Project from "../../components/Project/index.jsx";
import projects from "../../data-projects/data.js";
import "./styles.css";

function PageProjects() {
  return (
    <div className="cont-page-projects">
      <div className="cont-projects">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </div>
  );
}

export default PageProjects;

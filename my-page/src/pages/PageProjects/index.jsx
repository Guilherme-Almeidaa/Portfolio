import React from "react";
import Project from "../../components/Project/index.jsx";
import projects from "../../data-projects/data.js";
import "./styles.css";

function PageProjects() {
  const scroll = (event) => {
    console.log(event.nativeEvent.deltaY);
    if (event.nativeEvent.deltaY > 0) {
      event.target.scrollBy(300, 0);
    } else {
      event.target.scrollBy(-300, 0);
    }
  };
  return (
    <div className="cont-page-projects">
      <div onWheel={scroll} className="cont-projects">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
        <button className="button-next">Pŕoximo</button>
      </div>
    </div>
  );
}

export default PageProjects;

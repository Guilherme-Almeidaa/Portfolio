import React from "react";
import "./styles.css";

function Project({ project }) {
  return (
    <section className="cont-project">
      <section className="cont-img-project">
        <img className="img-project" src={project.image} alt="project" />
      </section>

      <section>
        <h2>{project.description}</h2>
        <section>
          <h2>Habilidades aprimoradas</h2>
          <ul>
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <a
            href={project.linkProject}
            className="link-project"
            target="_blank"
            rel="noreferrer"
            style={{
              pointerEvents: project.linkProject ? "" : "none",
              backgroundColor: project.linkProject ? "" : "rgb(167, 119, 119)",
              border: project.linkProject ? "" : "none",
            }}
          >
            Projeto
          </a>
          <a
            href={project.linkGit}
            className="link-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </section>
      </section>
    </section>
  );
}

export default Project;

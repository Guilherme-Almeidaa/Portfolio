import React from "react";
import html from "../../images/html.png";
import css from "../../images/css.png";
import javaScript from "../../images/javascript.png";
import react from "../../images/react.png";
import node from "../../images/node.png";
import mysql from "../../images/mysql.png";
import mongo from "../../images/mongo.png";
import photo from "../../images/Guilherme.jpg";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import curriculum from "../../images/curriculum.png";
import "./styles.css";

function PageBegin() {
  return (
    <div className="cont-page">
      <section className="cont-resume">
        <section className="cont-img-icons-contact">
          <section className="coont-icons-contact">
            <a
              href="https://github.com/Guilherme-Almeidaa"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon-contact" src={github} alt="icon" />
            </a>
            <a
              href="https://drive.google.com/file/d/1sLWQoz8sIKsk2k25T-1HxBrsPByvJfEu/view?format=pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon-contact" src={curriculum} alt="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/guilherme-almeidaa/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon-contact" src={linkedin} alt="icon" />
            </a>
          </section>
          <img className="image-tec" src={photo} alt="tec" />
        </section>
        <section className="cont-text-resume">
          <h2>
            Eu sou o Guilherme ,tenho 27 anos e sou estudante de desenvolvimento
            de software, adoro aprender coisas novas e gosto de desafios que me
            fazem ir além da minha capacidade, por isso estou em busca de uma
            oportunidade que satisfaz essas condições.
          </h2>
          <section className="cont-skills">
            <section className="skills">
              <h2>Habilidades</h2>
              <section className="incons-stacks">
                <img className="icons-stacks" src={html} alt="html-icon" />
                <img className="icons-stacks" src={css} alt="html-icon" />
                <img
                  className="icons-stacks"
                  src={javaScript}
                  alt="html-icon"
                />
                <img className="icons-stacks" src={react} alt="html-icon" />
                <img className="icons-stacks" src={node} alt="html-icon" />
                <img className="icons-stacks" src={mysql} alt="html-icon" />
                <img className="icons-stacks" src={mongo} alt="html-icon" />
              </section>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}

export default PageBegin;

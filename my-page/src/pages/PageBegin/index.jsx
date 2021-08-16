import React from "react";
import html from "../../images/html.png";
import css from "../../images/css.png";
import javaScript from "../../images/javascript.png";
import react from "../../images/react.png";
import node from "../../images/node.png";
import mysql from "../../images/mysql.png";
import mongo from "../../images/mongo.png";
import tec from "../../images/tec.png";
import "./styles.css";

function PageBegin() {
  return (
    <div className="cont-page">
      <section className="cont-resume">
        <img className="image-tec" src={tec} alt="tec" />
        <section className="cont-text-resume">
          <h2>
            Eu sou o Guilherme ,tenho 27 anos e sou estudante de desenvolvimento
            de software estou em busca de oportunidades
          </h2>
        </section>
      </section>
      <section className="cont-skills">
        <section className="skills">
          <h2>Habilidades</h2>
          <section className="incons-stacks">
            <img className="icons-stacks" src={html} alt="html-icon" />
            <img className="icons-stacks" src={css} alt="html-icon" />
            <img className="icons-stacks" src={javaScript} alt="html-icon" />
            <img className="icons-stacks" src={react} alt="html-icon" />
            <img className="icons-stacks" src={node} alt="html-icon" />
            <img className="icons-stacks" src={mysql} alt="html-icon" />
            <img className="icons-stacks" src={mongo} alt="html-icon" />
          </section>
        </section>
      </section>
    </div>
  );
}

export default PageBegin;

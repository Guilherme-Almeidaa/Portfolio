import logoTrybe from "../../images/logo-trybe.png";
import "./styles.css";

import React from "react";

function PageFormation() {
  return (
    <div className="cont-page-formation">
      <h2>Formação</h2>
      <section className="cont-formation">
        <img className="image-formation" src={logoTrybe} alt="logo-trybe" />
        <section className="text-cont-formation">
          <section className="cont-tittle">
            <h1 className="title-formation-text">Trybe</h1>
            <h1 className="title-formation-text">08/2020 - 08/2021</h1>
          </section>
          <p>
            Formação com mais de 1500 horas que aborda Fundamentos de
            desenvolvimento web, Frontend, Back-end, ciência da computação,
            engenharia de software, metodologias ágeis e habilidades.
            comportamentais.
          </p>
        </section>
      </section>
    </div>
  );
}

export default PageFormation;

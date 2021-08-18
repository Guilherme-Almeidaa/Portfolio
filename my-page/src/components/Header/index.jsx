import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="links-header">
        Home
      </Link>
      <Link to="/projects" className="links-header">
        Projetos
      </Link>
      <Link to="/formation" className="links-header">
        Formação
      </Link>
    </header>
  );
}

export default Header;

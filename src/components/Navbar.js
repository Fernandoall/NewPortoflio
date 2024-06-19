import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importe o arquivo de estilos do Navbar

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Sobre">Sobre</Link>
      </li>
      <li>
        <Link to="/Projetos">Projetos</Link>
      </li>
      <li>
        <Link to="/Contato">Contato</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

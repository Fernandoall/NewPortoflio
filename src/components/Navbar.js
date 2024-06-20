import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import "./Style/Navbar.css"; // Importe o arquivo de estilos do Navbar

const Navbar = () => (
  <motion.nav
    className="navbar"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 120 }}
  >
    <div className="nav-container">
      <div className="logo">Meu Portfólio</div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/Sobre">
            <FaUser /> Sobre
          </Link>
        </li>
        <li>
          <Link to="/Projetos">
            <FaProjectDiagram /> Projetos
          </Link>
        </li>
        <li>
          <Link to="/Contato">
            <FaEnvelope /> Contato
          </Link>
        </li>
      </ul>
    </div>
  </motion.nav>
);

export default Navbar;

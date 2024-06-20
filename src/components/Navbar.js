import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Style/Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className={`navbar ${darkMode ? "dark-mode" : ""}`}
      initial={{ x: -300 }}
      animate={{ x: isOpen ? 0 : -300 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div className="nav-container">
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars className={`hamburger ${isOpen ? "open" : ""}`} />
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/sobre" onClick={toggleMenu}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/projetos" onClick={toggleMenu}>
              Projetos
            </Link>
          </li>
          <li>
            <Link to="/habilidades" onClick={toggleMenu}>
              Habilidades
            </Link>
          </li>
          <li>
            <Link to="/testemunhos" onClick={toggleMenu}>
              Comentários
            </Link>
          </li>
          <li>
            <Link to="/artigos" onClick={toggleMenu}>
              Artigos
            </Link>
          </li>
          <li>
            <Link to="/certificacoes" onClick={toggleMenu}>
              Certificações
            </Link>
          </li>
          <li>
            <Link to="/experiencia" onClick={toggleMenu}>
              Experiência
            </Link>
          </li>
          <li>
            <Link to="/contato" onClick={toggleMenu}>
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;

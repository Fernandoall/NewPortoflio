import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Style/Navbar.css"; // Importe o arquivo de estilos do Navbar

const Navbar = () => (
  <motion.nav
    className="navBar"
    initial={{ y: -250 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 120 }}
  >
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
  </motion.nav>
);

export default Navbar;

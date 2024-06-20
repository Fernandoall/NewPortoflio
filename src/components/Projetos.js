import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Style/Projetos.css";

const Projetos = () => (
  <motion.div
    className="projetos-container"
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0.8 }}
    transition={{ duration: 0.5 }}
  >
    <h1>Meus Projetos</h1>
    <div className="projetos-grid">
      <motion.div className="projeto-card" whileHover={{ scale: 1.05 }}>
        <h2>Projeto 1</h2>
        <p>Descrição do projeto 1.</p>
        <div className="projeto-links">
          <a href="link_to_project1" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Ver Projeto
          </a>
          <a href="link_to_github1" target="_blank" rel="noopener noreferrer">
            <FaGithub /> Código Fonte
          </a>
        </div>
      </motion.div>
      <motion.div className="projeto-card" whileHover={{ scale: 1.05 }}>
        <h2>Projeto 2</h2>
        <p>Descrição do projeto 2.</p>
        <div className="projeto-links">
          <a href="link_to_project2" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Ver Projeto
          </a>
          <a href="link_to_github2" target="_blank" rel="noopener noreferrer">
            <FaGithub /> Código Fonte
          </a>
        </div>
      </motion.div>
      {/* Adicione mais projetos aqui */}
    </div>
  </motion.div>
);

export default Projetos;

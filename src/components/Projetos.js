import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Style/Projetos.css";
import background from "./Style/img/imagemU.gif";
import imageProjeto1 from "./Style/img/imageProjeto1.jpg";

const Projetos = () => (
  <motion.div
    className="projetos-container"
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0.8 }}
    transition={{ duration: 0.5 }}
    style={{ backgroundImage: `url(${background})` }}
  >
    <h1>Meus Projetos</h1>
    <div className="projetos-grid">
      <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
        <img src={imageProjeto1} alt="Projeto 1" className="project-image" />
        <h2>Projeto 1</h2>
        <p>Descrição do projeto 1.</p>
        <div className="projeto-links">
          <a href="link_to_project1" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Ver Projeto
          </a>
          <a
            href="https://github.com/Fernandoall/BarbeariaDev/tree/main"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> Código Fonte
          </a>
        </div>
      </motion.div>
      <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
        <img src="path_to_image2" alt="Projeto 2" className="project-image" />
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
      <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
        <img src="path_to_image3" alt="Projeto 3" className="project-image" />
        <h2>Projeto 3</h2>
        <p>Descrição do projeto 3.</p>
        <div className="projeto-links">
          <a href="link_to_project3" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Ver Projeto
          </a>
          <a href="link_to_github3" target="_blank" rel="noopener noreferrer">
            <FaGithub /> Código Fonte
          </a>
        </div>
      </motion.div>
      <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
        <img src="path_to_image4" alt="Projeto 4" className="project-image" />
        <h2>Projeto 4</h2>
        <p>Descrição do projeto 4.</p>
        <div className="projeto-links">
          <a href="link_to_project4" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Ver Projeto
          </a>
          <a href="link_to_github4" target="_blank" rel="noopener noreferrer">
            <FaGithub /> Código Fonte
          </a>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default Projetos;

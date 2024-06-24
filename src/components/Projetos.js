import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Style/Projetos.css";
import imageProjeto1 from "./Style/img/imageProjeto1.jpg"; // Importe suas imagens conforme necessário

const projetos = [
  {
    nome: "Projeto 1",
    descricao: "Descrição do projeto 1.",
    linkProjeto: "link_to_project1",
    linkGithub: "https://github.com/Fernandoall/BarbeariaDev/tree/main",
    imagem: imageProjeto1, // Importe a imagem aqui
  },
  {
    nome: "Projeto 2",
    descricao: "Descrição do projeto 2.",
    linkProjeto: "link_to_project2",
    linkGithub: "link_to_github2",
    imagem: "path_to_image2", // Insira o caminho da imagem aqui
  },
  {
    nome: "Projeto 3",
    descricao: "Descrição do projeto 3.",
    linkProjeto: "link_to_project3",
    linkGithub: "link_to_github3",
    imagem: "path_to_image3", // Insira o caminho da imagem aqui para o terceiro projeto
  },
];

const Projetos = () => {
  const [indiceProjeto, setIndiceProjeto] = useState(0);

  const handleProximo = () => {
    setIndiceProjeto((prev) => (prev === projetos.length - 1 ? 0 : prev + 1));
  };

  const handleAnterior = () => {
    setIndiceProjeto((prev) => (prev === 0 ? projetos.length - 1 : prev - 1));
  };

  return (
    <motion.div
      className="projetos-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="projects-section">
        <h1>Meus Projetos</h1>
        <div className="projetos-grid">
          {projetos.map((projeto, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              style={{
                display: index === indiceProjeto ? "block" : "none",
              }}
            >
              <img
                src={projeto.imagem}
                alt={projeto.nome}
                className="project-image"
              />
              <h2>{projeto.nome}</h2>
              <p>{projeto.descricao}</p>
              <div className="projeto-links">
                <a
                  href={projeto.linkProjeto}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Ver Projeto
                </a>
                <a
                  href={projeto.linkGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Código Fonte
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="navigation">
          <button onClick={handleAnterior}>&#8249;</button>
          <button onClick={handleProximo}>&#8250;</button>
        </div>
      </section>
    </motion.div>
  );
};

export default Projetos;

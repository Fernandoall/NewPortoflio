import React from "react";
import { motion } from "framer-motion";
import "./Style/Artigos.css";

const artigos = [
  { title: "Como melhorar suas habilidades em JavaScript", link: "#" },
  { title: "Introdução ao React", link: "#" },
  { title: "Principais frameworks CSS para front-end", link: "#" },
  { title: "SEO para desenvolvedores web", link: "#" },
  { title: "Testes automatizados em projetos React", link: "#" },
  {
    title: "Como escolher o melhor banco de dados para sua aplicação",
    link: "#",
  },
  {
    title: "Integração contínua: melhores práticas para desenvolvedores",
    link: "#",
  },
];

const Artigos = () => (
  <motion.div
    className="artigos-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2>Artigos</h2>
    <div className="artigos-list">
      {artigos.map((artigo, index) => (
        <motion.div
          key={index}
          className="artigo-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <a href={artigo.link}>{artigo.title}</a>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Artigos;

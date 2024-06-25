import React from "react";
import { motion } from "framer-motion";
import "./Style/Experiencia.css";

const experiencias = [
  {
    year: "2021",
    description:
      "Iniciei meus estudos em Análise e Desenvolvimento de Sistemas.",
  },
  {
    year: "2022",
    description: "Trabalhei como desenvolvedor front-end em uma startup.",
  },
  {
    year: "2023",
    description: "Concluí o curso de Análise e Desenvolvimento de Sistemas.",
  },
  {
    year: "2024",
    description: "Freelancer em projetos de desenvolvimento web.",
  },
];

const Experiencia = () => (
  <motion.div
    className="experiencia-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2>Experiência</h2>
    <div className="timeline">
      {experiencias.map((exp, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h3>{exp.year}</h3>
          <p>{exp.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Experiencia;

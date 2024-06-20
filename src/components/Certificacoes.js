import React from "react";
import { motion } from "framer-motion";
import "./Style/Certificacoes.css";

const certificacoes = [
  { name: "Certificação em JavaScript", issuer: "Coursera" },
  { name: "Certificação em React", issuer: "Udemy" },
  { name: "Certificação em HTML5", issuer: "Codecademy" },
  { name: "Certificação em CSS3", issuer: "LinkedIn Learning" },
  { name: "Certificação em TypeScript", issuer: "Udacity" },
];

const Certificacoes = () => (
  <motion.div
    className="certificacoes-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2>Certificações</h2>
    <div className="certificacoes-list">
      {certificacoes.map((cert, index) => (
        <motion.div
          key={index}
          className="cert-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h3>{cert.name}</h3>
          <p>Emitido por: {cert.issuer}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Certificacoes;

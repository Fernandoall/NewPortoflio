import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFileCode,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import "./Style/Habilidades.css";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, level: "Avançado" },
  { name: "CSS3", icon: <FaCss3Alt />, level: "Avançado" },
  { name: "JavaScript", icon: <FaJsSquare />, level: "Intermediário" },
  { name: "React", icon: <FaReact />, level: "Intermediário" },
  { name: "TypeScript", icon: <SiTypescript />, level: "Básico" },
  { name: "Bootstrap", icon: <FaBootstrap />, level: "Básico" },
  { name: "Node.js", icon: <FaNodeJs />, level: "Intermediário" },
  { name: "Express.js", icon: <FaFileCode />, level: "Intermediário" },
];

const Habilidades = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  const nextSkill = () => {
    setCurrentSkill((prevSkill) =>
      prevSkill === skills.length - 1 ? 0 : prevSkill + 1
    );
  };

  const prevSkill = () => {
    setCurrentSkill((prevSkill) =>
      prevSkill === 0 ? skills.length - 1 : prevSkill - 1
    );
  };

  return (
    <motion.div
      className="sobre-container" // Mantendo a mesma classe para manter o estilo consistente
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="intro-section">
        <h1>Habilidades</h1>
        <div className="skills-grid">
          <div className="skill-card">
            <motion.div
              key={currentSkill}
              className="card-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="skill-icon">{skills[currentSkill].icon}</div>
              <h3>{skills[currentSkill].name}</h3>
              <p>Nível: {skills[currentSkill].level}</p>
            </motion.div>
            <div className="navigation">
              <button className="nav-button" onClick={prevSkill}>
                &#8592;
              </button>
              <button className="nav-button" onClick={nextSkill}>
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Habilidades;

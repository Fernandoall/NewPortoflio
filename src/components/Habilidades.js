import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Style/Habilidades.css";
import habilidadeBackground from "./Style/img/imageFundoHabilidade.tiff";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, level: "Avançado" },
  { name: "CSS3", icon: <FaCss3Alt />, level: "Avançado" },
  { name: "JavaScript", icon: <FaJs />, level: "Intermediário" },
  { name: "React", icon: <FaReact />, level: "Intermediário" },
  { name: "TypeScript", icon: <FaReact />, level: "Básico" },
  { name: "Bootstrap", icon: <FaReact />, level: "Básico" },
  { name: "Node.js", icon: <FaReact />, level: "Intermediário" },
  { name: "Express.js", icon: <FaReact />, level: "Intermediário" },
];

const Habilidades = () => (
  <motion.div
    className="habilidades-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    style={{ backgroundImage: `url(${habilidadeBackground})` }}
  >
    <h2 style={{ color: "white" }}>Habilidades</h2>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="skill-card"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {skill.icon}
          <h3>{skill.name}</h3>
          <p>{skill.level}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Habilidades;

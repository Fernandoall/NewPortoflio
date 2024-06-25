import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import "./Style/Sobre.css";
import newImagem from "./Style/img/NewImagem.jpg";

const skills = [
  { icon: <FaHtml5 size={50} color="#E34F26" />, label: "HTML5" },
  { icon: <FaCss3Alt size={50} color="#1572B6" />, label: "CSS3" },
  { icon: <FaJsSquare size={50} color="#F7DF1E" />, label: "JavaScript" },
  { icon: <FaReact size={50} color="#61DAFB" />, label: "React" },
  { icon: <FaNodeJs size={50} color="#339933" />, label: "Node.js" },
  { icon: <FaGitAlt size={50} color="#F05032" />, label: "Git" },
];

const Sobre = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSkill = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === skills.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSkill = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      className="sobre-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="intro-section">
        <h1>Sobre Mim</h1>
        <div className="sobre-content">
          <img src={newImagem} alt="Fernando" className="sobre-pic" />
          <div class="text-content">
            <p>
              Eu sou Fernando, tenho 27 anos e estou cursando Análise e
              Desenvolvimento de Sistemas. Tenho proficiência em desenvolvimento
              front-end, com experiência em HTML, CSS, JavaScript e React.
            </p>
            <p>
              Estou sempre em busca de novos desafios e oportunidades para
              aprimorar minhas habilidades e contribuir com projetos inovadores.
            </p>
            <p>
              Adoro trabalhar em equipe, compartilhar conhecimentos e aprender
              com os outros. Meu objetivo é me tornar um desenvolvedor
              full-stack e criar soluções que façam a diferença.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>Habilidades</h2>
        <div className="skills-container">
          <motion.div
            key={currentIndex}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {skills[currentIndex].icon}
            <p>{skills[currentIndex].label}</p>
          </motion.div>
          <div className="navigation">
            <button onClick={prevSkill}>&#8249;</button>
            <button onClick={nextSkill}>&#8250;</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Sobre;

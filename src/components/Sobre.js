import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import "./Style/Sobre.css";

const Sobre = () => (
  <motion.div
    className="sobre-container"
    initial={{ x: "-100vw" }}
    animate={{ x: 0 }}
    exit={{ x: "100vw" }}
    transition={{ type: "spring", stiffness: 50 }}
  >
    <h1>Sobre Mim</h1>
    <div className="sobre-content">
      <img src="path/to/your/profile.jpg" alt="Profile" className="sobre-pic" />
      <div>
        <p>
          Eu sou Fernando, tenho 27 anos e estou cursando Análise e
          Desenvolvimento de Sistemas. Tenho proficiência em desenvolvimento
          front-end, com experiência em HTML, CSS, JavaScript e React.
        </p>
        <p>
          Estou sempre em busca de novos desafios e oportunidades para aprimorar
          minhas habilidades e contribuir com projetos inovadores.
        </p>
        <p>
          Adoro trabalhar em equipe, compartilhar conhecimentos e aprender com
          os outros. Meu objetivo é me tornar um desenvolvedor full-stack e
          criar soluções que façam a diferença.
        </p>
      </div>
    </div>
  </motion.div>
);

export default Sobre;

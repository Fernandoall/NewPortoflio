import React from "react";
import { motion } from "framer-motion";
import "./Style/Comentarios.css";

const testimonials = [
  { name: "John Doe", feedback: "Fernando é um desenvolvedor incrível!" },
  {
    name: "Jane Smith",
    feedback: "Sempre focado em entregar o melhor trabalho possível.",
  },
  {
    name: "Maria Silva",
    feedback: "Excelente trabalho em equipe e ótimo resultado final.",
  },
  {
    name: "Carlos Oliveira",
    feedback: "Confiável e sempre busca aperfeiçoar suas habilidades.",
  },
  {
    name: "Laura Souza",
    feedback:
      "Fernando demonstra um grande potencial em suas habilidades de desenvolvimento.",
  },
  {
    name: "João Pedro",
    feedback: "Sempre pronto para ajudar e colaborar com sua equipe.",
  },
  {
    name: "Ana Luiza",
    feedback: "Grande capacidade de liderança e comunicação eficaz.",
  },
  {
    name: "Pedro Henrique",
    feedback: "Excelente profissional, comprometido com a qualidade.",
  },
  {
    name: "Mariana Santos",
    feedback: "Habilidades técnicas impressionantes e dedicação inigualável.",
  },
];

const Testemunhos = () => (
  <motion.div
    className="testemunhos-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2>Comentários</h2>
    <div className="testemunhos-list">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="testimonial-card"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <p>"{testimonial.feedback}"</p>
          <h4>- {testimonial.name}</h4>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Testemunhos;

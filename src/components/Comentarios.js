import React from "react";
import { motion } from "framer-motion";
import "./Style/Comentarios.css";

const testimonials = [
  { name: "John Doe", feedback: "Fernando é um desenvolvedor incrível!" },
  {
    name: "Jane Smiths",
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
];

const Testemunhos = () => (
  <motion.div
    className="sobre-container" // Aproveitando o estilo do componente Sobre
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <section className="intro-section">
      <h1>Comentários</h1>
      <div className="testemunhos-list">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="paragrafocomentario">"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  </motion.div>
);

export default Testemunhos;

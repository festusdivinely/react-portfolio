import React from "react";
import "./about.css";
import photo2 from "./assets/pic2.png";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-img"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween", duration: 1 }}
      >
        <img src={photo2} alt="pt2" />
      </motion.div>
      <motion.div
        className="about-content"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween", duration: 1 }}
      >
        <motion.h2
          className="heading"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween", duration: 1 }}
        >
          About <span>Me</span>
        </motion.h2>
        <h3>Frontend Developer</h3>
        <p>
          "I am a passionate software alchemist, weaving digital dreams into
          reality with the magic of code. With a diverse skill set that includes
          HTML, CSS, JavaScript, React, Tailwind CSS, Python, and more, I craft
          enchanting web experiences that not only captivate but also solve
          real-world problems. Whether it's breathing life into user interfaces,
          conjuring interactive web applications, or wielding the power of data
          with Python, I'm a diligent creator who thrives on transforming ideas
          into elegant and functional software. Welcome to my world of
          innovation, where every line of code is a stroke of genius!"
        </p>
        <a href="\" className="btn">
          Read More
        </a>
      </motion.div>
    </section>
  );
}

export default About;

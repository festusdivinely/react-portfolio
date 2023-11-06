import React, { useState, useEffect } from "react";
import "./header.css";
import "../../../../app.css";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
// import BoxiconLinkDin from "./assets/BoxiconLinkDin";
import photo1 from "./assets/pic1.png";
import Hexagon from "./assets/Hexagon";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";

function Header({ texts }) {
  return (
    <section className={`header home`} id="header">
      <motion.div
        className="home-content"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween", duration: 1 }}
      >
        <h3>Hello, It's Me</h3>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween", duration: 1 }}
        >
          Festus Divinely
        </motion.h1>
        <h3 className="typewriter">
          <span style={{ display: "inline-block" }}>And I'm A&nbsp;</span>
          <span style={{ display: "inline-block" }}>
            <Typewriter
              options={{
                strings: ["Front-End Developer", "Full-Stack Developer", "Soft-Ware Developer", "Android-App Developer", "Data Analyst", "Machine Learning Engineer"],
                autoStart: true,
                loop: true,
              }}
            ></Typewriter>
          </span>
        </h3>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween", duration: 1 }}
        >
          My job is to do justice to website design, trust me! I make your dream
          come through one code at a time
        </motion.p>
        <div className="social-media">
          <a href="\">
            <Facebook className="bx bxl-facebook" />
          </a>
          <a href="\">
            <Twitter className="bx bxl-twitter" />
          </a>
          <a href="\">
            <Instagram className="bx bxl-instagram-alt" />
          </a>
          <a href="\">
            <LinkedIn />
          </a>
        </div>
        <motion.a href="\" className="btn">
          Download CV
        </motion.a>
      </motion.div>

      <motion.div
        className="home-img"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween", duration: 1 }}
      >
        <img src={photo1} alt="" className="photo2 photoInc" />
      </motion.div>
    </section>
  );
}

export default Header;

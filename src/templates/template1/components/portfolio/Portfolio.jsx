import React from "react";
import "./portfolio.css";
import { motion } from "framer-motion";
import techPhoto1 from "./assets/rz1.jpg";
import techPhoto2 from "./assets/rz2.jpg";
import techPhoto3 from "./assets/rz3.jpg";
import techPhoto4 from "./assets/rz4.jpg";
import techPhoto5 from "./assets/rz5.jpg";
import techPhoto6 from "./assets/rz6.jpg";

import { OpenInNew } from "@mui/icons-material";

function Portfolio() {
  return (
    <section className="portfolio">
      <motion.h2
        className="heading"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween", duration: 1 }}
      >
        Latest <span>Project</span>
      </motion.h2>

      <div className="portfolio-container">
        <motion.div
          className="portfolio-box"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, originY: 0 }}
          transition={{ duration: 0.5, type: "tween", duration: 1 }}
        >
          <img src={techPhoto1} alt="" className="techPhoto" />
          <div className="portfolio-layer">
            <h4>Web design</h4>
            <p>
              Step into a world of effortless shopping,{" "}
              <span className="hiddenText">
                stylish finds, and unbeatable convenience at our eCommerce
                website. We've meticulously designed every detail to ensure your
                satisfaction. Discover fashion, tech, and lifestyle products
                that cater to your unique tast
              </span>
            </p>
            <a href="">
              <OpenInNew className="linkIcon" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="portfolio-box"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, originY: 0 }}
          transition={{ duration: 0.5, type: "tween", duration: 1 }}
        >
          <img src={techPhoto2} alt="" className="techPhoto" />
          <div className="portfolio-layer">
            <h4>Web design</h4>
            <p>
              Step into a world of effortless shopping,{" "}
              <span className="hiddenText">
                stylish finds, and unbeatable convenience at our eCommerce
                website. We've meticulously designed every detail to ensure your
                satisfaction. Discover fashion, tech, and lifestyle products
                that cater to your unique tast
              </span>
            </p>
            <a href="">
              <OpenInNew className="linkIcon" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="portfolio-box"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, originY: 0 }}
          transition={{ duration: 0.5, type: "tween", duration: 1 }}
        >
          <img src={techPhoto3} alt="" className="techPhoto" id="portfolio" />
          <div className="portfolio-layer">
            <h4>Web design</h4>
            <p>
              Step into a world of effortless shopping,{" "}
              <span className="hiddenText">
                stylish finds, and unbeatable convenience at our eCommerce
                website. We've meticulously designed every detail to ensure your
                satisfaction. Discover fashion, tech, and lifestyle products
                that cater to your unique tast
              </span>
            </p>
            <a href="">
              <OpenInNew className="linkIcon" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="portfolio-box"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, originY: 0 }}
          transition={{ duration: 0.5, type: "tween", duration: 1 }}
        >
          <img src={techPhoto4} alt="" className="techPhoto" />
          <div className="portfolio-layer">
            <h4>Web design</h4>
            <p>
              Step into a world of effortless shopping,{" "}
              <span className="hiddenText">
                stylish finds, and unbeatable convenience at our eCommerce
                website. We've meticulously designed every detail to ensure your
                satisfaction. Discover fashion, tech, and lifestyle products
                that cater to your unique tast
              </span>
            </p>
            <a href="">
              <OpenInNew className="linkIcon" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="portfolio-box"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, originY: 0 }}
          transition={{ duration: 0.5, type: "tween", duration: 1 }}
        >
          <img src={techPhoto5} alt="" className="techPhoto" />
          <div className="portfolio-layer">
            <h4>Web design</h4>
            <p>
              Step into a world of effortless shopping,{" "}
              <span className="hiddenText">
                stylish finds, and unbeatable convenience at our eCommerce
                website. We've meticulously designed every detail to ensure your
                satisfaction. Discover fashion, tech, and lifestyle products
                that cater to your unique tast
              </span>
            </p>
            <a href="">
              <OpenInNew className="linkIcon" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="portfolio-box"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, originY: 0 }}
          transition={{ duration: 0.5, type: "tween", duration: 1 }}
        >
          <img src={techPhoto6} alt="" className="techPhoto" />
          <div className="portfolio-layer">
            <h4>Web design</h4>
            <p>
              Step into a world of effortless shopping,{" "}
              <span className="hiddenText">
                stylish finds, and unbeatable convenience at our eCommerce
                website. We've meticulously designed every detail to ensure your
                satisfaction. Discover fashion, tech, and lifestyle products
                that cater to your unique tast
              </span>
            </p>
            <a href="">
              <OpenInNew className="linkIcon" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;

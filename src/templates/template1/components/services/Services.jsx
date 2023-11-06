import React from "react";
import "./services.css";
import { Code, Apps, Android, Analytics } from "@mui/icons-material";
import { motion } from "framer-motion";

function Services() {
  return (
    <section className="services" id="services">
      <motion.h2
        className="heading"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween", duration: 1 }}
      >
        Our <span>Services</span>
      </motion.h2>

      <motion.div
        className="services-container"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween", duration: 1 }}
      >
        <div className="services-box">
          <Code className="services-icons" />
          <h3>Web Development</h3>
          <p>
            My passion lies in web development, where I create captivating
            digital experiences through the art of code.
            <span className="hiddenText">
              {" "}
              With expertise in HTML, CSS, JavaScript, React, and Tailwind CSS,
              I bring your vision to life on the web. Let's make your online
              presence shine with stunning websites and user-friendly
              interfaces.
            </span>
          </p>
          <a href="" className="btn">
            Read More
          </a>
        </div>

        <div className="services-box">
          <Apps className="services-icons" />
          <h3>Software Design</h3>
          <p>
            Software development is my realm, where I turn concepts into
            functional solutions. With a versatile skill{" "}
            <span className="hiddenText">
              set encompassing web and app development, as well as backend
              expertise in Python, I empower businesses through efficient,
              elegant, and scalable software. Let's embark on a journey of
              digital transformation, one line of code at a time.
            </span>
          </p>
          <a href="" className="btn">
            Read More
          </a>
        </div>

        <div className="services-box">
          <Android className="services-icons" />
          <h3>
            Android App <span className="hiddenText">Developement</span>
          </h3>
          <p>
            In the world of mobile, I specialize in crafting seamless Android
            app experiences. My expertise in React{" "}
            <span className="hiddenText">
              native, coupled with a deep understanding of the Android
              ecosystem, allows me to transform your ideas into engaging and
              feature-rich applications. Whether it's a consumer app, business
              tool, or a game, let's create the next big thing in the Android
              world.
            </span>
          </p>
          <a href="" className="btn">
            Read More
          </a>
        </div>

        <div className="services-box">
          <Analytics className="services-icons" />
          <h3>Data Analysis And Machine Learning</h3>
          <p>
            I am a data magician, skilled in the art of data analysis and
            machine learning. With a blend of statistical
            <span className="hiddenText">
              {" "}
              expertise, programming prowess, and a knack for data
              visualization, I extract valuable insights from your information.
              But it doesn't stop there; I also employ machine learning
              algorithms to automate tasks and make predictions that drive
              smarter decisions. Let's turn your data into actionable
              intelligence and automation.
            </span>
          </p>
          <a href="" className="btn">
            Read More
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Services;

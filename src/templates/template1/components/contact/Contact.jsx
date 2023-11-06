import React from "react";
import "./contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.h2
        className="heading"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween", duration: 1 }}
      >
        Contact <span>Me</span>
      </motion.h2>

      <motion.form
        action="#"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween", duration: 1 }}
      >
        <div className="input-box">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Mobile Number" />
          <input type="text" placeholder="Email Subject" />
        </div>
        <textarea name="" id="" cols="30" rows="10">
          Your Message
        </textarea>
        <input type="submit" value="Send Message" className="btn" />
      </motion.form>
    </section>
  );
}

export default Contact;

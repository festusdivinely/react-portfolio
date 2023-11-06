import React from "react";
import "./home.css";
import "../../../../app.css";
import { motion } from "framer-motion";
import Topbar from "../../components/topbar/Topbar";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Services from "../../components/services/Services";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <Topbar />
      <Header/>
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

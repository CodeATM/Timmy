import React from "react";
import Header from "./../Components/Header/Header";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Service from "../Components/Services/Service";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import ScrollUp from '../Components/ScrollUP/ScrollUp'
import Works from '../Components/Works/Works'

const page = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Service />
        <Works/>
        <Contact />
      </main>
      <Footer />
      <ScrollUp/>
    </div>
  );
};

export default page;

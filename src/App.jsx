import React from "react";
import "./styles/global.css";
import Header from "./components/header/Header";
import Presentation from "./components/presentation/Presentation";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projetos from "./components/projetos/Projetos";
import ContactForm from "./components/form/ContactForm";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Presentation />
      <About />
      <Skills />
      <Projetos />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;

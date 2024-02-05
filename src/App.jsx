import React from "react";
import "./styles/global.css";
import Header from "./components/header/Header";
import Presentation from "./components/presentation/Presentation";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projetos from "./components/projetos/Projetos";

const App = () => {
  return (
    <>
      <Header />
      <Presentation />
      <About />
      <Skills />
      <Projetos />
    </>
  );
};

export default App;

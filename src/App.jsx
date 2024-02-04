import React from "react";
import "./styles/global.css";
import Header from "./components/header/Header";
import Presentation from "./components/presentation/Presentation";
import About from "./components/about/About";

const App = () => {
  return (
    <>
      <Header />
      <Presentation />
      <About />
    </>
  );
};

export default App;

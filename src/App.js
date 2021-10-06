import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Main />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default App;

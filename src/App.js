import React from "react";

import Header from "./components/Header/header.component";

import Home from "./components/Home/home.component";

import Projects from "./components/Projects/projects.component";

import Resume from "./components/Resume/resume.component";

import Skills from "./components/Skills/Skills.comonent";

import Contact from "./components/Contact/contact.component";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;

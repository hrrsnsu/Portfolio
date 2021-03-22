import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ProjectJumbo from "./components/ProjectJumbo";
import ProjectCards from "./components/ProjectCards";
import InterestJumbo from "./components/InterestJumbo";
import Interest from "./components/Interest";

import React from "react";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <ProjectJumbo />
      <ProjectCards />
      <InterestJumbo />
      <Interest />      
    </div>
  );
}

export default App;

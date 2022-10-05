import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
//import Skills from "./containers/skills/Skills";
//import Experience from "./containers/Experience/Experience";
import Slider from "./containers/Slider/Slider";
import { Contact } from "./containers/contact/Contact";

function App() {
  return (
    <div className="backgorund">
      <Navbar />
      {/* <Home /> */}
      <About />
      <Slider />
      <Contact />
    </div>
  );
}

export default App;

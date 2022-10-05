import React from "react";
import "./Home.css";
import Portret from "../images/portret2.png";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h4>Hello, my name is</h4>
        <h1>
          Begic <span>Midjan</span>
        </h1>
        <h3>I am a Frontend Developer</h3>
      </div>
      <img src={Portret} id="portrait" className="portret-img" />
    </section>
  );
}

export default Home;

import React from "react";
import "../about/About.css";
import aboutImg from "../images/about.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="main">
        <img src={aboutImg} className="about-pic" />
        <div className="about-text">
          <h2>About Me</h2>
          <h5>
            Frontend <span>Developer</span>
          </h5>
          <p>
            Hi there! my name is Midjan Begic. I am aself-taught front-end
            Developer. I specialize in <span>JavaScript and React</span>. In the
            future I want to be a Full Stack Developer, that is why I study{" "}
            <span>Node JS</span> in my spare time.
            <p>
              Other than programming my passions in life are Bike Rides,
              Mountain climbing, Skiing and video games.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

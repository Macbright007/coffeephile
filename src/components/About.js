import React from "react";
import { AboutContainer } from "./styles";
import coffeeCup from "../images/coffee.png"

const About = () => {
  return (
    <AboutContainer>
      <div className="about-details">
        <h1>welcome to about</h1>

        <div className="image__container">
          <img src={coffeeCup} alt="coffee" />
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;

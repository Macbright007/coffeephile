import React from "react";
import { AboutContainer } from "./styles";
import coffeeCup from "../images/coffee.png";

const About = () => {
  return (
    <AboutContainer>
      <div className="about-details">
        <div className="image__container">
          <img src={coffeeCup} alt="coffee" />
        </div>

        <div>
          <h1>
            Who We are<span></span>
          </h1>
          <h5>
            Looking for a perfect coffee to start your day and keep you going?
          </h5>

          <p>
            Look no further! Coffeephile Store provides you with a robust menu
            to fulfil your every cravings. We take pride in our dedication and
            commitment to serving our customer better and provide warmth and
            happy savor that nourishes the soul.
          </p>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;

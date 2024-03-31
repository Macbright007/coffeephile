import React from "react";
import { AboutContainer } from "./styles";
import coffeeCup from "../images/coffee.png";
import { IoCheckmarkSharp } from "react-icons/io5";
import Services from "./Services";

const About = () => {
  return (
    <AboutContainer>
      <div className="about-details">
        <div className="image__container">
          <img src={coffeeCup} alt="coffee" />
        </div>

        <div className="aboutContent">
          <h5>
            Who We are<span></span>
          </h5>
          <h1>ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN, Coffeephile.</h1>

          <p>
            Looking for a perfect coffee to start your day and keep you going?
            Look no further! Coffeephile Store provides you with:
          </p>

          <div className="list">
            <div className="points">
              <IoCheckmarkSharp className="listIcon" />
              <span>a warmth and happy savor that nourishes the soul.</span>
            </div>
            <div className="points">
              <IoCheckmarkSharp className="listIcon" />
              <span>a robust menu to fulfil your every cravings.</span>
            </div>
            <div className="points">
              <IoCheckmarkSharp className="listIcon" />
              <span>and we take pride in our dedication .</span>
              {/* <span>and we take pride in our dedication and commitment to serving our customer better.</span> */}
            </div>
          </div>
        </div>
      </div>

      <Services />
    </AboutContainer>
  );
};

export default About;

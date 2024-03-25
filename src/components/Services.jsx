import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { ServiceWrapper } from "./styles";
import coffeeCup from "../images/wcu-1.png"
import location from "../images/wcu-2.png"

const Services = () => {
  return (
    <ServiceWrapper>
      <div className="services">
        <h3>why choose us</h3>
        <h1>we provide the best services in your city</h1>

        <div className="service__cards">
          <div className="serviceCard">
            <div className="serviceImg">
              <img src={coffeeCup} alt="cup of coffe" />
            </div>

            <h1>testy coffee recipe</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ad consequatur facilis obcaecati ut reiciendis!
            </p>

            <div className="serviceIcon">
              <IoCheckmarkSharp className="listIcon" />
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceImg">
              <img src={location} alt="cup of coffe" />
            </div>

            <h1>great location </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ad consequatur facilis obcaecati ut reiciendis!
            </p>

            <div className="serviceIcon">
              <IoCheckmarkSharp className="listIcon" />
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceImg">
              <img src={coffeeCup} alt="cup of coffe" />
            </div>

            <h1>professional chef</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ad consequatur facilis obcaecati ut reiciendis!
            </p>

            <div className="serviceIcon">
              <IoCheckmarkSharp className="listIcon" />
            </div>
          </div>
        </div>
      </div>
    </ServiceWrapper>
  );
};

export default Services;

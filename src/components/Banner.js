import React from "react";
import { Content } from "./styles";

const Banner = () => {
  return (
    <section className="banner">
      <Content>
        {/* <div> */}
          <h4>A Cup Of Coffee For Everyone.</h4>
          <p>We Don’t Make Your Coffee, We Make Your Day.</p>
          <div className="btn">
            <button>VIEW MENU</button>
          </div>
        {/* </div> */}
      </Content>
    </section>
  );
};

export default Banner;

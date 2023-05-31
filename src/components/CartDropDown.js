import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import CoffeeContext from "../contexts/CoffeeContext";
import { CartWrapper } from "./styles";

const CartDropDown = ({coffee}) => {
  const { removeFromCart, addToCart } = useContext(CoffeeContext)

  //variables
    //acc = accumulator and curr = currentItem

  return (
    <CartWrapper>
      <div className="image__cont">
        <img src={coffee.img} alt="cartimg" />
      </div>
      <div className="content__side">
        <h2>{coffee.coffee_name}</h2>
        <div className="increValue">
          <span className="spanLeft" onClick={() => removeFromCart(coffee.id)}>
          {/* <span className="spanLeft"> */}
            -
          </span>
          <span className="spanMiddle">{coffee.qty}</span>
          {/* <span className="spanRight"> */}
          <span className="spanRight" onClick={() => addToCart(coffee)}>
            +
          </span>
        </div>
      </div>
      <div>
        <MdDeleteForever className="delIcon" onClick={() => removeFromCart(coffee.id)} />
        <p>${coffee.price}</p>
      </div>
    </CartWrapper>
  );
};

export default CartDropDown;

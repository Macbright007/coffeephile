import React, { useContext, useState } from "react";
import CoffeeContext from "../contexts/CoffeeContext";
// import Header from "./Header";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { CartPageWrapper, CartBody, CartImgCont } from "./styles";
import cart from "../images/cart.png";
import PaystackPop from "@paystack/inline-js";

const CartPage = () => {
  const [email, setEmail] = useState("");
  // using context
  const { addedCoffee, removeFromCart, addToCart } = useContext(CoffeeContext);

  //variables
  //acc = accumulator and curr = currentItem
  const totalPrice = addedCoffee.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  const handlePayment = (e) => {
    e.preventDefault();

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_caf651a9be19d6c43831fc848bc81aa2714783cf",
      amount: totalPrice * 100,
      email: email,

      onSuccess(transcation) {
        let message = `Payment Complete!! Reference ${transcation.reference}`;
        alert(message);
        setEmail("")
      },

      onCancel() {
        alert("You are about to cancel the transaction!!!");
      },
    });
  };

  return (
    <CartPageWrapper>
      <>
        {/* <Header>
          <h4>Cart</h4>
        </Header> */}

        {addedCoffee.length === 0 ? (
          <div className="empty-cart">
            <img src={cart} className="img-fluid" alt="cart" />
            <h3>Your cart is empty</h3>
            <p style={{ color: "#794e21" }}>
              Start shopping to add items to your cart
            </p>
            <Link to="/">Back to homepage</Link>
          </div>
        ) : (
          <div className="cartBoard">
            <div className="scroll__bar">
              <CartBody>
                <tr>
                  <th>Products</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>

                {addedCoffee.map((coffee) => {
                  return (
                    <tr>
                      <td>
                        <CartImgCont>
                          <img src={coffee.img} alt="coffee" />
                        </CartImgCont>
                      </td>
                      <td>{coffee.coffee_name}</td>
                      <td>#{coffee.price}</td>
                      <td>
                        <div>
                          <span
                            className="left"
                            onClick={() => removeFromCart(coffee.id)}
                          >
                            -
                          </span>
                          <span className="middle">{coffee.qty}</span>
                          <span
                            className="right"
                            onClick={() => addToCart(coffee)}
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td>{coffee.price * coffee.qty}</td>
                      <td>
                        <RiDeleteBinLine
                          className="del"
                          onClick={() => removeFromCart(coffee.id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </CartBody>
            </div>

            <div className="total">
              <h1>cart total</h1>
              <div className="ending">
                <h3>Total Price</h3>
                <p>#{totalPrice}</p>
              </div>


                <p>enter email to proceed to checkout</p>
              <div className="btn__btn">
                <div className="formInput">
                  <label htmlFor="email">email address:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  onClick={handlePayment}
                  disabled={email.length < 1}
                >
                  proceed to checkout (#{totalPrice})
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    </CartPageWrapper>
  );
};

export default CartPage;

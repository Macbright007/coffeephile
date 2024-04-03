import React, { useContext } from "react";
import { Navigation } from "./styles";
import { Link } from "react-router-dom";
// import logo from "../images/Logo.svg";
// import { GiCoffeeCup, GiConsoleController } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import Search from "./Search";
import CoffeeContext from "../contexts/CoffeeContext";
import CartDropDown from "./CartDropDown";
import cart from "../images/empty.jpg";

const Navbar = () => {
  // const { addedCoffee, removeFromCart } = useContext(CoffeeContext);
  const { addedCoffee, searchValue, handleSearchChange } = useContext(CoffeeContext);
  

  // function to calculate total price of items added 
  const totalPrice = addedCoffee.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  return (
    <Navigation>
      <div className="wrap genLayout" id="nav">
        <div className="rightnav__side">
          <Link to="/" style={{ textDecoration: "none", color: "#753d21" }}>
            <h1 className="logo">
              {/* <img src={logo} alt="logo" /> */}
              <span>
                Coff
                <GiCoffeeCup
                  style={{
                    color: "#753d21",
                    fontSize: "25px",
                    marginTop: "7px",
                  }}
                />
                phile
              </span>
            </h1>
          </Link>

          <div className="search">
            <FiSearch
              style={{ color: "#a9643c", fontSize: "22px", marginTop: ".2em" }}
            />
            <Search onChange={handleSearchChange} searchValue={searchValue} />
          </div>
        </div>

        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" className="menu_icon" />
        <div className="leftnav__side">
          <div className="nav-items">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>

          <button>SignUp</button>

          <div className="shop">
            <FiShoppingCart className="shop_icon" />
            <span className="spa">{addedCoffee.length}</span>
            <div className="menu">
              {addedCoffee.length === 0 ? (
                <div className="empty-cart">
                  <img src={cart} className="img-fluid" alt="cart" />
                  <h3>empty cart!</h3>
                  <p>Start shopping to add items to your cart</p>
                </div>
              ) : (
                <>
                  {addedCoffee.map((coffee) => {
                    return <CartDropDown coffee={coffee} />;
                  })}
                </>
              )}
              {addedCoffee.length > 0 && (
                <div className="menuFooter">
                  <p className="buttonPara">Clear</p>
                  <Link to="/cartPage" className="buttonPara">Goto Cart</Link>
                </div>
              )}
              <div className="checkOut">
                <p>Total:</p>
                <h3>#{totalPrice}</h3>
              </div>
              <div className="btn_btn">
              <Link to="/cartPage">place order (#{totalPrice})</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navigation>
  );
};

export default Navbar;

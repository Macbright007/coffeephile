import React, { useContext } from "react";
import { Navigation } from "./styles";
import { Link } from "react-router-dom";
// import logo from "../images/Logo.svg";
import { GiCoffeeCup } from "react-icons/gi";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import Search from "./Search";
import CoffeeContext from "../contexts/CoffeeContext";

const Navbar = () => {
  const { addedCoffee } = useContext(CoffeeContext);

  return (
    <Navigation>
      <div className="wrap">
        <div className="rightnav__side">
          <Link to="/" style={{textDecoration: "none", color: "#753d21"}}>
            <h1>
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
              style={{ color: "#a9643c", fontSize: "25px", marginTop: ".1em" }}
            />
            <Search />
          </div>
        </div>

        <div className="leftnav__side">
          <div className="nav-items">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>

          <button>SignUp</button>
          <FiShoppingCart
            style={{
              color: "#753d21",
              fontSize: "25px",
              marginTop: "7px",
              marginLeft: "1em",
              cursor: "pointer",
            }}
          />
          <span className="spa">{addedCoffee.length}</span>
        </div>
      </div>
    </Navigation>
  );
};

export default Navbar;

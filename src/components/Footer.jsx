import React from "react";
import { GrSend, GrLocation } from "react-icons/gr";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { GiCoffeeCup } from "react-icons/gi";
import {
  FaInstagram,
  FaGooglePlusG,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="inner__footer__wrapper genLayout">
        <div className="top">
          <h1>
            <span>
              <HiOutlineDevicePhoneMobile className="footer__icon" /> phone: 
            </span>
            +234 9064693431
          </h1>
          <h1>
            <span>
              <GrLocation className="footer__icon" /> address: 
            </span>
            29, Ire Akari Estate, Lagos Nigeria
          </h1>

          <form>
            <input type="email" placeholder="Enter your email" />
            <button>
              subscribe
              <GrSend style={{ fontSize: "1rem", color: "#753d21" }} />
            </button>
          </form>
        </div>

        <div className="middle">
          <Link to="/" style={{ textDecoration: "none", color: "#753d21" }}>
            <h1 className="logo">
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

          <div className="inner__body">
            <p>
            At Coffphile, we take pride in our dedication and commitment to serving our customers better and provide warmth and happy savor that nourishes the soul.
            </p>

            <div className="icons">
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaYoutube />
              </span>
              <span>
                <FaGooglePlusG />
              </span>
              <span>
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="footerLink">
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/shop">shop</Link>
          </div>

          <Link to="/" style={{ textDecoration: "none", color: "#753d21" }}>
            go top <HiOutlineArrowNarrowUp />
          </Link>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

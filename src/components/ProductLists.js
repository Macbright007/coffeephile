import React from "react";
import ProductCard from "./ProductCard";
import { CoffeeDetails } from "../ProductsData";
import { ProductsWrapper } from "./styles";
import Banner from "./Banner";

const ProductLists = () => {
 
  return (
    <ProductsWrapper>
      <Banner />

      <h1>Popular Coffees</h1>
      <div className="card__container">
        {CoffeeDetails.map((coffeeDetail) => {
          return <ProductCard item={coffeeDetail} />;
        })}
      </div>
    </ProductsWrapper>
  );
};

export default ProductLists;

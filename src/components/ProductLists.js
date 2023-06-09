import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { CoffeeDetails } from "../ProductsData";
import { ProductsWrapper, SelectWrapper } from "./styles";
import Banner from "./Banner";
import SelectMenu from "./SelectMenu";



const ProductLists = () => {
  const [menuSelected, setMenuSelected] = useState("");

  const handleOptionChange = (event) => {
    setMenuSelected(event.target.value);
  };

  // to remove duplicate object from the array
  const uniqueCategories = Array.from(
    new Set(CoffeeDetails.map((item) => item.label))
  );
 
  const filteredData = menuSelected === "" ? CoffeeDetails : CoffeeDetails.filter((item) => item.label === menuSelected);

  // const uniqueFilterOptions = Array.from(new Set(CoffeeDetails.map((option) => option.label)))
  // .map((label) => CoffeeDetails.find((option) => option.label === label));

  return (
    <ProductsWrapper>
      <Banner />

      <SelectWrapper>
        {/* <SelectMenu options={uniqueFilterOptions} onSelect={handleFilterSelect}/> */}
        <SelectMenu
          options={uniqueCategories}
          data={CoffeeDetails}
          handleOptionChange={handleOptionChange}
          menuSelected={menuSelected}
        />
      </SelectWrapper>

      <h1>Popular Coffees</h1>
      <div className="card__container">
        {/* {filteredData.length > 0 ? (
          <FilteredCard filteredData={filteredData}/>
        ) : (
          CoffeeDetails.map((coffeeDetail) => {
            return <ProductCard item={coffeeDetail} />;
          })
        )} */}
            
        {
           filteredData.map((coffeeDetail) => {
            return <ProductCard item={coffeeDetail} />;
          })
        }
      </div>
    </ProductsWrapper>
  );
};

export default ProductLists;

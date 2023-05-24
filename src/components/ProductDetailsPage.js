import React from 'react'
import { CoffeeDetails } from '../ProductsData'
import { useParams } from "react-router-dom";
import ProductDetailsCard from './ProductDetailsCard';

const ProductDetailsPage = () => {
  const params = useParams();

  const coffee = CoffeeDetails.find((cof) => cof.id === Number(params.id));

  return (
    <div style={{paddingTop: "10rem",  background: "linear-gradient(90deg, #f0d2bf 57.7%, #c0886a 57.7%)", height: "100vh"}}>
      <ProductDetailsCard coffee={coffee} />
    </div>
  )
}

export default ProductDetailsPage
import React, {useContext} from "react";
import { Card } from "./styles";
import { Link } from "react-router-dom";
import CoffeeContext from "../contexts/CoffeeContext";
import { ToastContainer } from 'react-toastify';

const ProductCard = ({ item }) => {
  const { id, coffee_name, price, img } = item;
  const { addToCart } = useContext(CoffeeContext);

  
  return (
    <Card key={id}>
      <Link
        to={`/product/${id}`}
        style={{ textDecoration: "none", color: "#a9643c" }}
      >
        <div className="img__container">
          <img src={img} alt="pic" />
        </div>
      </Link>

      <div className="content">
        <h2>{coffee_name}</h2>
        <div className="inner__content">
          <p>#{price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      </div>

      <ToastContainer />
    </Card>
  );
};

export default ProductCard;

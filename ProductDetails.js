import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails({ products }) {
  let { index } = useParams();
  let product = products[index];

  return (
    <div style={{ textAlign: "center" }}>
    <img height={400} src={product.image} alt={product.title} />
      <h2>Name:{product.title}</h2>
      <h3>Price:{product.price}</h3>
      <h5>{product.description}</h5>
    </div>
  );
} 

export default ProductDetails;

import { Rating } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProductDetails({ products,addtoCart }) {
  let { index } = useParams();
  let product = products[index];

  return (
    <div style={{ textAlign: "center" }}>
    <img height={400} src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <Rating name="read-only" value={product.rating.rate} readOnly />
      <h3>${product.price}</h3>
      <div style={{width:"500px",margin:"auto",textAlign:"center"}}>
      <h5>{product.description}</h5>
      </div>
      <Button onClick={()=>addtoCart(product)} variant="primary">Add to cart</Button>
    </div>
  );
} 

export default ProductDetails;

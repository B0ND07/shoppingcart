import React from "react";
import Button from "react-bootstrap/esm/Button";

function AddCart({cart,deleteCart}) {
  return (
    <div style={{ textAlign: "center" }}>
        {cart.map((display)=>(
            <div style={{ display: 'flex',justifyContent: 'space-between',alignItems: 'center', border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
      
        <img height={200} src={display.image} alt={display.title} />
        <h2>{display.title}<br></br><br></br>Price:{display.price}</h2>
    
        <Button onClick={()=>deleteCart(display)}>delete</Button>
        </div>
      
  ))}
  </div>
  );
}

export default AddCart;

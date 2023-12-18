import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function AddCart({cart,deleteCart}) {
  return (
    <div style={{ textAlign: "center" }}>
        {cart.map((display)=>(
            <div style={{ display: 'flex',justifyContent: 'space-between',alignItems: 'center', border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
      
        <img height={200} src={display.image} alt={display.title} />
        <h2>{display.title}<br></br><br></br>${display.price}</h2>
    
        
        <Button onClick={()=>deleteCart(display)} variant="contained" color="error" startIcon={<DeleteIcon />}>Delete</Button>
        </div>
      
  ))}
  </div>
  );
}

export default AddCart;

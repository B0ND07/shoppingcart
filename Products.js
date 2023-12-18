import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {LinkContainer} from 'react-router-bootstrap'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Products = ({products,addtoCart}) => {


  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"40px",paddingTop:"40px",justifyContent:"center", backgroundColor: "#f8f8f8"}}>
    {products.map((display,ind)=>(
        
    
    <Card key={display.id} style={{ width: '18rem',marginBottom: '20px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', }}>
      <LinkContainer to={`/view/${ind}`}><Card.Img height={240} variant="top" src={display.image} /></LinkContainer>
      <Card.Body>
      <Link style={{textDecoration:"none",color:"black"}} to={`/view/${ind}`}><Card.Title>{display.title}</Card.Title></Link>
        {/* <Card.Text>
          {display.description}
        </Card.Text> */}
        <Button onClick={()=>addtoCart(display)} variant="contained">Add to cart</Button>
      </Card.Body>
    </Card>
    ))}
    </div>
  )
}

export default Products
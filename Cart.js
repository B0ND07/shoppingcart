import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './Products'
import NavBar from './NavBar'
import ProductDetails from './ProductDetails';
import AddCart from './AddCart';

const Cart = () => {

    const [products,setProducts]=useState([])
    const [cart,setCart]=useState(() => {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    });


    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            // console.log(res.data)
            setProducts(res.data)
        })
        
        localStorage.setItem('cart', JSON.stringify(cart));
        
    },[cart])

    console.log(products)
    const addtoCart=(product)=>{
      setCart([...cart,product])
      alert("product added to cart")
    }
    const deleteCart=(product)=>{
      setCart(cart.filter((item)=>item.id!==product.id))
    }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><NavBar showcart={true}/><Products products={products} addtoCart={addtoCart}/></>} />
          <Route path="view/:index" element={<><NavBar showcart={true}/><ProductDetails addtoCart={addtoCart} products={products} /></>} />
          <Route path="cart" element={<><NavBar showcart={false}/>{cart.length>0?<AddCart cart={cart} deleteCart={deleteCart}/>:<h2 style={{textAlign:"center"}}>cart is empty</h2>}</>} />
        </Routes>
      </BrowserRouter>
      
        

    </div>
  )
}

export default Cart
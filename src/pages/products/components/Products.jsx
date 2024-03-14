import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Products() {
  const[products,setProducts]=useState([]);
  const getProducts=async()=>{
    const response =await fetch(`https://ecommerce-node4.vercel.app/categories/products/category${category._id}`);
    const data=await response.json();
setProducts(data.products);
  }
  useEffect(() =>{
    getProducts();
  },[] )
  return (
    
    <>
    <h2>Products</h2>
    <div className='row'>
    {products.map((product)=>
     <div className='category' key={category.product._id}>
      <p>{category.product. description}</p>
 
       
     </div>)}
     </div>
    </>


)
}


export default Products
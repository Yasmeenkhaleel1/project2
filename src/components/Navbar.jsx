import { Link } from 'react-router-dom'
import './Navbar.css'
import React from 'react'

export default function Navbar() {
  return (
    <div className='home'>
        <p> Home Page</p>
    <div className='navbar'>
       <ul>
        <li>
          <Link> Home Page</Link>
           </li>
        <li>
          <Link to={"/pages/categories/components/Categories"}>Categories</Link>
           </li>
        <li>
<Link to={"/pages/products/components/Products"}>Products</Link>
        </li>
       
       </ul>
       </div>
       <div>
       <p className='auth'>
     <Link to={"/pages/login/components/Login"}> Login</Link>
     <Link to={"/pages/register/components/Register"}> Register</Link>
        </p>
        </div>
   
   
    </div>
  )
}

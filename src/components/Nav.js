import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary p-4">

        
          {/* http://localhost:3000/ */}
          <label className="nav-item" color="white"> 
          <Link className="nav-link" to='/'>Home</Link> </label>
          {/* http://localhost:3000/about */}
          <label className="nav-item"> 
          <Link className="nav-link" to='/about'>About</Link> </label>
          {/* http://localhost:3000/items */}
          <label className="nav-item">
             <Link className="nav-link" to='/items'>Items</Link> </label>
          {/* http://localhost:3000/contactus */}
          <label className="nav-item">
             <Link className="nav-link" to='/addNewProduct'>Add New Product</Link> </label>
      </nav>
      {/* Renders the child route's element, if there is one. */}
      <Outlet />
    </>
  )
} 
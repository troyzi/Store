import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Items() {
  return (
    
    <div className='container'>
      
      <h3 className='text-center'>Our menu</h3>
      <button className='btn btn-secondary m-2'>
        <Link to='/items/clothe' className='nav-link'>Clothe</Link>
      </button>
      <button className='btn btn-secondary m-2'>
        <Link to='/items/electrical' className='nav-link'>Elecrical</Link>
      </button>

      <button className='btn btn-secondary m-2'>
        <Link to='/items/perfumes' className='nav-link'>Perfumes</Link>
      </button>

      <Outlet/>
    </div>
  )
}
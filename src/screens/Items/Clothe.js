import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { clotheList } from '../../dummy-data'

export default function clothe() {
  return (
    <div>
      <h5>Pick your favorite clothe</h5>

      {clotheList.map(clothe =>(
        <button className='btn btn-light m-1' key={clothe.id}>
          <Link to={`/items/clothe/${clothe.name}`}
           className='nav-link'>{clothe.name}</Link>
        </button>
      ))}

      <Outlet/>
    </div>
  )
}
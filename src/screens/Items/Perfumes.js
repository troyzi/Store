import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { perfumeslList } from '../../dummy-dadap'
export default function Perfumes() {
  return (
    <div>
      <h5>Pick your favorite perfumes</h5>

      {perfumeslList.map(perfumes =>(
        <button className='btn btn-light m-1' key={perfumes.id}>
          <Link to={`/items/perfumes/${perfumes.name}`}
           className='nav-link'>{perfumes.name}</Link>
        </button>
      ))}

      <Outlet/>
    </div>
  )
}

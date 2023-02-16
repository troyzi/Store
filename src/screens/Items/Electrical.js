import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { electricalList } from '../../dummy-datae'
export default function Electrical() {
  return (
    <div>
      <h5>Pick your favorite Electrical</h5>

      {electricalList.map(electrical =>(
        <button className='btn btn-light m-1' key={electrical.id}>
          <Link to={`/items/electrical/${electrical.name}`}
           className='nav-link'>{electrical.name}</Link>
        </button>

        
      ))}

      <Outlet/>
    </div>
  )
}

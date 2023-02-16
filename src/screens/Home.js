import React from 'react'

export default function Home() {
  return (
      <div className='container'>
            <h1 className='text-center'>Welcome to our Store </h1>
            <img height={350} src="https://www.gannett-cdn.com/presto/2020/01/13/PVIT/91644ca8-a672-4ed5-a230-dde9801510f9-IMG_2411.jpg"/>
            <br></br>
            <button onClick={() => { ("/categories"); }}
              className="btn btn-outline-dark">
              Pick your favorite
            </button>
    </div>
  )
}




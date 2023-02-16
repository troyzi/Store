import React from 'react'
import { useParams } from 'react-router-dom'
import { clotheList } from '../dummy-data'

export default function MyFvorite() {

    let params = useParams(); 
    let clotheChoice = clotheList.find(clothe =>
      clothe.name === params.clotheName
      )



      return (
        <div className="card" style={{width: "18rem;"}}>
        <img style={{width:'100%', height: "30vh", objectFit:'contain'}} src={clotheChoice.img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Product name: {clotheChoice.name}</h5>
            <p className="card-text">Category: {clotheChoice.category}clothe </p>
            <p className="card-text">Price: {clotheChoice.price} shekel</p>
            <p className="card-text">Is in stock: {clotheChoice.isinstock} true</p>
            <a href="#" className="btn btn-primary">Edit</a>
            <a href="#" className="btn btn-primary">View</a>
            <a href="#" className="btn btn-primary">Delete</a>


        </div>
    </div>
  )
}
import React from 'react'
import { useParams } from 'react-router-dom'
import { perfumeslList } from '../dummy-dadap';

export default function MyFavoritePerfumes() {
    let params = useParams(); 
    let perfumesChoice = perfumeslList.find(perfumes =>
      perfumes.name === params.perfumesName)



          return (
            <div className="card" style={{width: "18rem;"}}>
              <img style={{width:'100%', height: "30vh", objectFit:'contain'}} src={perfumesChoice.img} className="card-img-top" alt="..."/>
            <div className="card-body">
               <h5 className="card-title">Product name:{perfumesChoice.name}</h5>
               <p className="card-text">Category: {perfumesChoice.category}Perfumes </p>

            <p className="card-text">Price: {perfumesChoice.price} shekel</p>
            <p className="card-text">Is in stock: {perfumesChoice.isinstock} true</p>
            <a href="#" className="btn btn-primary">Edit</a>
            <a href="#" className="btn btn-primary">View</a>
            <a href="#" className="btn btn-primary">Delete</a>
                </div>
            </div>
          )
        }

import React from 'react'
import { useParams } from 'react-router-dom'
import{ electricalList} from '../dummy-datae'

export default function MyFavoriteElecrical() {
    let params = useParams(); 
    let electricalChoice = electricalList.find(electrical =>
        electrical.name === params.electricalName)

        


          return (
            <div className="card" style={{width: "18rem;"}}>
            <img style={{width:'100%', height: "30vh", objectFit:'contain'}} src={electricalChoice.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{electricalChoice.name}</h5>
                <p className="card-text">Category: {electricalChoice.category} Electrical</p>
                <p className="card-text">Price: {electricalChoice.price} shekel</p>
                <p className="card-text">Is in stock: {electricalChoice.isinstock} true</p>
 <a href="#" className="btn btn-primary">Edit</a>
            <a href="#" className="btn btn-primary">View</a>
            <a href="#" className="btn btn-primary">Delete</a>            </div>
        </div>
      )
    }

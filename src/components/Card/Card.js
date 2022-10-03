import React from "react";
import './Card.css'


const Card = ({name,email,id}) => {
    return(
        <div className="card">
            <img className="card-image" src={`https://robohash.org/${id}`} alt="robot" />
            <div className="card-caption">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
       
    )
}

export default Card;
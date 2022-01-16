import React from 'react';
import './Card.css';
import Placeholder from "../images/me.gif"

const Card = props => (
    <div className="Card">
        <img src={Placeholder}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
)

export default Card;
import React from 'react';
import './Card.css';
//import Placeholder from "../images/me.gif"

const Card = props => (
    <div className="Card">
        <a href={props.url} target='_blank' rel='noreferrer'>
        <img src={props.img} alt={props.alt || ""}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        </a>
    </div>
)

export default Card;
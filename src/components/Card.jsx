import React from "react";
import Star from '../assets/Star.svg'
import StarFill from '../assets/Star_fill.svg'
import '../stylesheets/card.css'
const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} alt={props.name} className="coffee-image"/>
      <div className="name-price-container">
        <span>{props.name}</span>
        <div className="price-container">{props.price}</div>
      </div>
      <div className="rating-container">
        {props.votes !== 0 ? (
          <div className="rating-votes">
            <img src={StarFill} alt="Star Fill"/>
            <span>{props.rating}</span>
            <span className="votes">({props.votes} votes)</span>
          </div>
        ) : (
          <div className="rating-votes">
            <img src={Star} alt="Star"/>
            <span className="votes">No ratings</span>
          </div>
        )}
        {!props.available ? (
          <span className="sold-out-text">Sold out</span>
        ) : null}
      </div>
    </div>
  );
};

export default Card;

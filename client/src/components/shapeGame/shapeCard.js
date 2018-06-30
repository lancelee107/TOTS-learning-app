import React from 'react'
import "./shapeCard.css";

const ShapeCard = props => (
  <div className="card col-s2 shapeCardIndividual">
  <div className="card-title">{props.name}</div>
    <div className="img-container">
      <img
        alt={props.name}
        src={props.image}
      />
      </div>
  </div>
);

export default ShapeCard;
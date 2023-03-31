import React from "react";
import "./Details.css";

const Details = (props) => {
  const { name, picture, icon, title, lending } = props.details;

  const handleToCart = props.handleToCart;

  return (
    <div className="details">
      <img className="details-pic" src={picture} alt="" />
      <div className="details-info">
        <img className="details-icon" src={icon} alt="" />
        <p>{name}</p>
      </div>
      <h2>{title}</h2>
      <p>{lending}</p>
      <p onClick={() => handleToCart(props.details)}>Marks as read</p>
    </div>
  );
};

export default Details;

import React from "react";
import "./Details.css";

const Details = (props) => {
  const { name, picture, icon, title } = props.details;
  return (
    <div className="details">
      <img className="details-pic" src={picture} alt="" />
      <div className="details-info">
        <img className="details-icon" src={icon} alt="" />
        <p>{name}</p>
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default Details;

import React from "react";
import "./Details.css";

const Details = (props) => {
  const { name, picture, icon, title, lending, time, bookmark } = props.details;

  const handleToCart = props.handleToCart;
  const handleToBookmark = props.handleToBookmark;

  return (
    <div className="details">
      <img className="details-pic" src={picture} alt="" />
      <div className="details-info">
        <div className="img-flex">
          <img className="details-icon" src={icon} alt="" />
          <p>{name}</p>
        </div>
        <div className="info">
          <p>{time} min read</p>
          <img
            onClick={() => handleToBookmark(props.details)}
            className="bookmark"
            src={bookmark}
            alt=""
          />
        </div>
      </div>
      <h2>{title}</h2>
      <p>{lending}</p>
      <p onClick={() => handleToCart(props.details)}>Marks as read</p>
    </div>
  );
};

export default Details;

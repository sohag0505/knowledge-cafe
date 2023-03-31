import React from "react";
import "./Details.css";

const Details = (props) => {
  const { name, picture, icon, title, lending, time, bookmark, date } =
    props.details;

  const handleToCart = props.handleToCart;
  const handleToBookmark = props.handleToBookmark;

  return (
    <div className="details">
      <img className="details-pic" src={picture} alt="" />
      <div className="details-info">
        <div className="img-flex">
          <img className="details-icon" src={icon} alt="" />
          <p>
            {name} <br /> <small className="date-container">{date}</small>
          </p>
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
      <p onClick={() => handleToCart(props.details)}>
        <u>Marks as read</u>
      </p>
    </div>
  );
};

export default Details;

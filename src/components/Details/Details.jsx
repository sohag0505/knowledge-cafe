import React from "react";

const Details = (props) => {
  const { name } = props.details;
  return (
    <div>
      <h2>Title: {name}</h2>
    </div>
  );
};

export default Details;

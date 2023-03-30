import React, { useEffect, useState } from "react";
import Details from "../Details/Details";

const Blog = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div>
      {details.map((details) => (
        <Details details={details} key={details.index}></Details>
      ))}
    </div>
  );
};

export default Blog;

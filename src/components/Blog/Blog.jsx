import React, { useEffect, useState } from "react";
import Details from "../Details/Details";
import "./Blog.css";

const Blog = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div className="blog-container">
      <div className="details-container">
        {details.map((details) => (
          <Details details={details} key={details.index}></Details>
        ))}
      </div>
    </div>
  );
};

export default Blog;

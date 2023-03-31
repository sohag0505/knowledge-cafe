import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Details from "../Details/Details";
import "./Blog.css";

const Blog = () => {
  const [details, setDetails] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const handleToCart = (details) => {
    const newCart = [...cart, details];
    setCart(newCart);
  };

  return (
    <div className="blog-container">
      <div className="details-container">
        {details.map((details) => (
          <Details
            details={details}
            key={details.index}
            handleToCart={handleToCart}
          ></Details>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Blog;

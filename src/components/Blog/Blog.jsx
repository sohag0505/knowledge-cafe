import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Bookmark from "../Bookmark/Bookmark";
import Cart from "../Cart/Cart";
import Details from "../Details/Details";
import "./Blog.css";

const Blog = () => {
  const [details, setDetails] = useState([]);
  const [cart, setCart] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const handleToCart = (details) => {
    const newCart = [...cart, details];
    setCart(newCart);
    toast.success("Successfully added to cart");
  };
  const handleToBookmark = (details) => {
    const newBookmark = [...bookmark, details];
    setBookmark(newBookmark);
    toast.success("Successfully added to cart");
  };

  return (
    <div className="blog-container">
      <div className="details-container">
        {details.map((details) => (
          <Details
            details={details}
            key={details.index}
            handleToCart={handleToCart}
            handleToBookmark={handleToBookmark}
          ></Details>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
        <Bookmark bookmark={bookmark}></Bookmark>
      </div>
    </div>
  );
};

export default Blog;

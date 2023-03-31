import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  for (const details of cart) {
    total = total + details.time;
  }

  return (
    <div className="cart">
      <h2>Spent time on read : {total} min</h2>
    </div>
  );
};

export default Cart;

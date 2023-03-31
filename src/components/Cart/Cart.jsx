import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  return (
    <div className="cart">
      <h2>Spent time on read :{cart.length} min</h2>
    </div>
  );
};

export default Cart;

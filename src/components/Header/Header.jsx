import React from "react";
import logo from "../../images/sohag.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h2>Knowledge Cafe</h2>
      <div className="nav-content">
        <a href="/blog">Blog</a>
        <a href="/help">Help</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
        <img src={logo} alt="" />
      </div>
    </nav>
  );
};

export default Header;

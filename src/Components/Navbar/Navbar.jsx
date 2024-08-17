import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import CartButton from "../CartButton/CartButton";
import WishListButton from "../WishListButton/WishListButton";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <p className="shopName"> Dream Shop </p>
        <NavLink
          activeClassName="active"
          to="/"
          style={{ color: "#898686", textDecoration: "none" }}
        >
          <p className="home navText">Home</p>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/products"
          style={{ color: "#898686", textDecoration: "none" }}
        >
          <p className="products navText">Products</p>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/about"
          style={{ color: "#898686", textDecoration: "none" }}
        >
          <p className="about navText">About</p>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/contact"
          style={{ color: "#898686", textDecoration: "none" }}
        >
          <p className="contact navText">Contact</p>
        </NavLink>

        <div className="wishListBtn">
          <WishListButton />
        </div>

        <div className="cartBtn">
          <CartButton />
        </div>
      </div>
    </>
  );
}

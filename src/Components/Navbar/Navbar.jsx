import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import CartButton from "../CartButton/CartButton";
import WishListButton from "../WishListButton/WishListButton";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <span className="shopName"> Dream Shop </span>
        <div style={{ display: "flex", flexGrow: 1 }}>
          <NavLink
            activeClassName="active"
            to="/"
            style={{ color: "#898686", textDecoration: "none" }}
          >
            <span className="home navText">Home</span>
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/products"
            style={{ color: "#898686", textDecoration: "none" }}
          >
            <span className="products navText">Products</span>
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/about"
            style={{ color: "#898686", textDecoration: "none" }}
          >
            <span className="about navText">About</span>
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/contact"
            style={{ color: "#898686", textDecoration: "none" }}
          >
            <span className="contact navText">Contact</span>
          </NavLink>
        </div>

        <div style={{ width: '20%', flexShrink: 0 }}>
          <WishListButton />
          <CartButton />
        </div>
      </div>
    </>
  );
}

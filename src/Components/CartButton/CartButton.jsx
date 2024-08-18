import React from "react";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './CartButton.css'

export default function CartButton() {
  const total = useSelector((state) => {
    return state.cartReducer.total;
  });

  return (
    <>
      <NavLink
        to="/cart"
        activeClassName="active"
        style={{ color: "#898686", textDecoration: "none", marginLeft: "8px" }}
      >
        <IconButton aria-label="cart" >
          <Badge badgeContent={total} color="secondary" max={99}>
            <ShoppingCartIcon fontSize="large" />
          </Badge>
        </IconButton>
        Cart
      </NavLink>
    </>
  );
}

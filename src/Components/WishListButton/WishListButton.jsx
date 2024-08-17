import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function WishListButton() {
  return (
    <>
      <NavLink
        to="/wishlist"
        activeClassName="active"
        style={{ color: "black", textDecoration: "none" }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{ color: "black", backgroundColor: "gray" }}
        >
          Wish List
        </Button>
      </NavLink>
    </>
  );
}

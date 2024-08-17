import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromWishList } from "../../Store/actions/forWishList";
import { addToCart } from "../../Store/actions/forCart";

export default function MoveToCart({ product }) {
  const dispatch = useDispatch();

  function handleMove() {
    dispatch(removeFromWishList(product));
    dispatch(addToCart(product));
  }

  return (
    <>
      <Button
        onClick={handleMove}
        size="small"
        // sx={{ backgroundColor: "rgb(211, 211, 240)", color: "black" }}
      >
        Move To Cart
      </Button>
    </>
  );
}

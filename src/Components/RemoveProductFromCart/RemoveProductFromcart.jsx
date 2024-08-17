import React from "react";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../Store/actions/forCart";
import { Button } from "@mui/material";

export default function RemoveProductFromcart({ product }) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(removeProductFromCart(product));
  }

  return (
    <div>
      <Button onClick={handleClick}>
        Remove
      </Button>
    </div>
  );
}

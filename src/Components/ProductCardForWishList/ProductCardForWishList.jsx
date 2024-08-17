import React from "react";
import "./ProductCardForWishList.css";
import { Button, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import MoveToCart from "../MoveToCart/MoveToCart";
import { useDispatch } from "react-redux";
import { removeFromWishList } from "../../Store/actions/forWishList";

export default function ProductCardForWishList({ product }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(removeFromWishList(product));
  }

  return (
    <>
      <div className="wishList">
        <div className="wishImg">
          <img src={product.images[0]} alt="" height={120} />
        </div>
        <div className="wishtitl">
          <h4>{product.title}</h4>
        </div>
        <div className="wishPrice">
          <Typography variant="h9" component="div">
            <CurrencyRupeeIcon fontSize="small" />
            <span style={{ position: "relative", bottom: "5px" }}>
              {new Intl.NumberFormat("en-IN").format(product.price.value)}
            </span>
          </Typography>
        </div>
        <div className="moveToCart">
          <MoveToCart product={product} />
        </div>
        <div className="wishDel">
          <Button
            onClick={handleDelete}
            size="small"
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}

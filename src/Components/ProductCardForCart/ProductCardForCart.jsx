import React from "react";
import "./ProductCardForCart.css";
import { Button, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ReduxAddToCart from "../AddToCart/ReduxAddToCart";
import { useDispatch, useSelector } from "react-redux";
import RemoveProductFromcart from "../RemoveProductFromCart/RemoveProductFromcart";
import { NavLink } from "react-router-dom";
import { addProduct } from "../../Store/actions/ForProductDetails";

export default function ProductCardForCart({ product }) {
  const totalRs =
    useSelector((state) => {
      return !state.cartReducer[product.id]
        ? 0
        : state.cartReducer[product.id].quantity;
    }) * product.price.value;

  const dispatch = useDispatch();

  function handleOnclick() {
    dispatch(addProduct(product));
  }

  return (
    <>
      <div className="cartContainer">
        <div className="cartImg">
          <img src={product.images[0]} alt="" height="90px" />
        </div>
        <div className="cartTitle">
          <h3>{product.title}</h3>
        </div>

        <div className="priceCart">
          <Typography variant="h7" component="div">
            <CurrencyRupeeIcon fontSize="small" />
            <span style={{ position: "relative", bottom: "3px" }}>
              {new Intl.NumberFormat("en-IN").format(product.price.value)}
            </span>
          </Typography>
        </div>

        <div className="addCart">
          <ReduxAddToCart product={product} />
        </div>

        <div className="totalRs">
          <Typography variant="h9" component="div">
            <div style={{ marginTop: "10px", height: "15px" }}>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "serif",
                }}
              >
                Total =
              </span>

              <CurrencyRupeeIcon
                fontSize="small"
                sx={{ position: "relative", bottom: "-5px" }}
              />

              {new Intl.NumberFormat("en-IN").format(totalRs)}
            </div>
          </Typography>
        </div>
        <div className="removeCart">
          <RemoveProductFromcart product={product} />
        </div>

        <div>
          <NavLink to="/productdetails">
            <Button onClick={handleOnclick}>Open</Button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

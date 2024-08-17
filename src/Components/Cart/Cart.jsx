// import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ProductCard from "../ProductCard/ProductCard";
import "./Cart.css";
import { Button, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ProductCardForCart from "../ProductCardForCart/ProductCardForCart";
import { deleteAll } from "../../Store/actions/forCart";

export default function Cart() {
  // const { cart } = useContext(cartContext);
  const cart = useSelector((state) => {
    return state.cartReducer;
  });
  const cartList = Object.values(cart);

  cartList.pop(); //state ma last ma total 6 e remove karyu 6

  var cartPrice = 0;
  const dispatch = useDispatch();

  function handleDeleteAll() {
    dispatch(deleteAll());
  }

  if (cartList.length === 0) {
    return (
      <div className="noIteam">
        <p className="iteamText">No Iteams Added</p>
      </div>
    );
  } else {
    return (
      <div style={{ marginBottom: "50px" }}>
        <div className="allCartProducts">
          {cartList.map((curEle) => {
            cartPrice += curEle.quantity * curEle.price.value;

            return (
              // <ProductCard
              //   key={curEle.id}
              //   product={curEle}
              //   displayRating={false}
              //   displayRemove={true}
              //   displayTotal={true}
              // />
              <ProductCardForCart key={curEle.id} product={curEle} />
            );
          })}
        </div>
        <div className="cartPrice">
          <Typography variant="h9" component="div">
            <span
              style={{
                marginRight: "10px",
                position: "relative",
                bottom: "3px",
              }}
            >
              CART TOTAL =
            </span>
            <CurrencyRupeeIcon fontSize="large" />
            <span style={{ position: "relative", bottom: "5px" }}>
              {new Intl.NumberFormat("en-IN").format(cartPrice)}
            </span>
          </Typography>
        </div>
        <div className="deleteAll">
          <Button
            onClick={handleDeleteAll}
            size="large"
            variant="contained"
            sx={{ backgroundColor: " rgb(150, 150, 150)" }}
          >
            Delete All
          </Button>
        </div>
      </div>
    );
  }
}

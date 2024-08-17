import { React, useState } from "react";
import { useSelector } from "react-redux";
import "./ProductDetails.css";
import { Rating, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ReduxAddToCart from "../AddToCart/ReduxAddToCart";
import ProductFetures from "./ProductFetures";

export default function ProductDetails() {
  const currentProduct = useSelector((state) => {
    return state.ProductDetailsReducer;
  });

  const cp = currentProduct;
  const images = currentProduct.images;

  const [curLink, setCurLink] = useState(images[0]);
  const [display, setDisplay] = useState({ 0: true });

  function handleOnMouseMove(e) {
    setCurLink(e.target.src);
    setDisplay({
      [e.target.name]: true,
    });
  }

  return (
    <>
      <div className="top">
        <div className="bigImg">
          <img className="big img" src={curLink} alt="" />
        </div>
        <div className="productTitle">
          <Typography variant="h4" component="div" height="120px">
            {cp.title}
          </Typography>

          <Typography variant="h9" component="div">
            <CurrencyRupeeIcon fontSize="medium" />

            <span className="price">
              {new Intl.NumberFormat("en-IN").format(cp.price.value)}
            </span>
          </Typography>

          <div className="rating">
            <Rating
              value={cp.rating.value}
              precision={0.5}
              readOnly
              size="large"
            />
            <p className="ratingCount">
              {cp.rating.value} ({cp.rating.count})
            </p>
          </div>

          <div>
            <ReduxAddToCart product={cp} />
          </div>
        </div>
      </div>
      <div className="smallImg">
        {images.map((curEle, index) => {
          return (
            <img
              name={index}
              className="img smallImgHover"
              style={
                display[index] && {
                  border: "1px solid blue",
                  boxSizing: "border-box",
                }
              }
              onMouseMove={handleOnMouseMove}
              src={curEle}
              alt=""
              height="100px"
            />
          );
        })}
      </div>
      <div>
        <ProductFetures product={cp} />
      </div>
    </>
  );
}

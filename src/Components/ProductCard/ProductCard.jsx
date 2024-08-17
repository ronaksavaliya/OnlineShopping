import * as React from "react";
import "./ProductCard.css";
import ReduxAddToCart from "../AddToCart/ReduxAddToCart";
import { Button,Rating } from "@mui/material";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RemoveProductFromcart from "../RemoveProductFromCart/RemoveProductFromcart";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Store/actions/ForProductDetails";
import { NavLink } from "react-router-dom";
import SliderImg from "./SliderImg";
import AddToWishList from "../AddToWishList/AddToWishList";


// export default function ProductCard({product}) {
//   return (
//     <>
//     <div className='product'>
//         <img src={product.images[0]} alt=""  style={{width:'200px'}}/>
//         <h2> {product.title} </h2>
//         <p> {product.price.value} </p>
//         <Rating  value={product.rating.value} precision={0.5} readOnly/>
//         <ReduxAddToCart product = {product}/>
//     </div>

//     </>
//   )
// }

export default function ProductCard({
  product,
  displayRating,
  displayRemove,
  displayTotal,
}) {
  const totalRs =
    useSelector((state) => {
      return !state.cartReducer[product.id]
        ? 0
        : state.cartReducer[product.id].quantity;
    }) * product.price.value;

  const dispatch = useDispatch();
  const [displaySlider, setdisplaySlider] = useState(false);
  const [displayImg, setdisplayImg] = useState(true);

  function handleOnclick() {
    dispatch(addProduct(product));
  }

  function handleOnMouseHover() {
    setdisplaySlider(true);
    setdisplayImg(false);
  }

  function handleOnMouseLeave() {
    setdisplaySlider(false);
    setdisplayImg(true);
  }

  return (
    <Card sx={{ height: 500, width: 350, margin: "14px" }}>
      <CardContent>
        <div
          className="slider"
          onMouseEnter={handleOnMouseHover}
          onMouseLeave={handleOnMouseLeave}
          style={{ textAlign: "center", height: "220px" }}
        >
          {displayImg && (
            <img src={product.images[0]} alt="" style={{ height: "180px" }} />
          )}
          {displaySlider && <SliderImg product={product} />}
        </div>

        <Typography variant="h6" component="div" height="120px">
          {product.title}
        </Typography>

        <Typography variant="h9" component="div">
          <CurrencyRupeeIcon fontSize="small" />
          <span style={{ position: "relative", bottom: "5px" }}>
            {new Intl.NumberFormat("en-IN").format(product.price.value)}
          </span>
        </Typography>

        {displayRating && (
          <Rating value={product.rating.value} precision={0.5} readOnly />
        )}

        <ReduxAddToCart product={product} />

        {displayTotal && (
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
        )}
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <NavLink to="/productdetails">
          <Button size="small" onClick={handleOnclick}>
            More
          </Button>
        </NavLink>
        {displayRemove && <RemoveProductFromcart product={product} />}

        <div>
          <AddToWishList product={product}/>
        </div>
      </CardActions>
    </Card>
  );
}

import { React, useState } from "react";
import "./ProductCardForList.css";
import { Button, Divider, Rating, Typography } from "@mui/material";
import SliderImg from "../ProductCard/SliderImg";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ReduxAddToCart from "../AddToCart/ReduxAddToCart";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Store/actions/ForProductDetails";

export default function ProductCardForList({ product }) {
  const [displaySlider, setdisplaySlider] = useState(false);
  const [displayImg, setdisplayImg] = useState(true);
  const dispatch = useDispatch();

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
    <>
      <div className="listContainer">
        <div
          className="slider"
          onMouseEnter={handleOnMouseHover}
          onMouseLeave={handleOnMouseLeave}
          style={{
            textAlign: "center",
            height: "220px",
            width: "350px",
            marginLeft: "10px",
            marginTop: "30px",
          }}
        >
          {displayImg && (
            <img src={product.images[0]} alt="" style={{ height: "180px" }} />
          )}
          {displaySlider && (
            <SliderImg sx={{ backgroundColor: "green" }} product={product} />
          )}
        </div>

        <div
          style={{ width: "1px", height: "200px", backgroundColor: "black" }}
        ></div>

        <div className="listTitle">
          <Typography variant="h6" component="div" height="120px">
            {product.title}
          </Typography>

          <div>
          <Typography variant="h6" component="div">
            <CurrencyRupeeIcon fontSize="small" />
            <span style={{ position: "relative", bottom: "3px" }}>
              {new Intl.NumberFormat("en-IN").format(product.price.value)}
            </span>
          </Typography>

          <Rating value={product.rating.value} precision={0.5} readOnly />
          </div>
        </div>

        <div style={{marginLeft:'20px', width:'140px'}}>
        <ReduxAddToCart  product={product} />
        </div>
        
        <div>
        <NavLink to="/productdetails">
          <Button size="small" onClick={handleOnclick} sx={{position:'relative', bottom:'-100px', right:'10px'}}>
            More
          </Button>
        </NavLink>
        </div> 
      </div>
      <Divider sx={{marginTop:"50px"}} />
    </>
  );
}

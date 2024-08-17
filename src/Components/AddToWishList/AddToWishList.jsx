import { React, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  removeFromWishList,
} from "../../Store/actions/forWishList";

export default function AddToWishList({ product }) {
  //   const [showBtn, setshowBtn] = useState({ outlined: true, filled: false });
  const state = useSelector((state) => {
    return state.wishListReducer;
  });
  const dispatch = useDispatch();
  let initial;

  if (state[product.id]) {
    initial = true;
  } else {
    initial = false;
  }

  const [isAvailable, setIsAvailable] = useState(initial);

  function handleAdd() {
    // setshowBtn({
    //   outlined: false,
    //   filled: true,
    // });
    setIsAvailable(!isAvailable);
    dispatch(addToWishList(product));
  }

  function handleRemove() {
    // setshowBtn({
    //   outlined: true,
    //   filled: false,
    // });

    setIsAvailable(!isAvailable);
    dispatch(removeFromWishList(product));
  }

  return (
    <>
      {isAvailable === false && (
        <IconButton onClick={handleAdd}>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
      )}

      {isAvailable === true && (
        <IconButton onClick={handleRemove}>
          <FavoriteOutlinedIcon sx={{ color: "rgb(255, 60, 60)" }} />
        </IconButton>
      )}
    </>
  );
}

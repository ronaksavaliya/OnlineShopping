import React from "react";
import { useSelector } from "react-redux";
import ProductCardForWishList from "../ProductCardForWishList/ProductCardForWishList";

export default function WishList() {
  const wishListObject = useSelector((state) => {
    return state.wishListReducer;
  });
  const wishList = Object.values(wishListObject);

  if (wishList.length === 0) {
    return (
      <div className="noIteam">
        <p className="iteamText">No Iteams Added</p>
      </div>
    );
  }

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap"}}>
        {wishList.map((curEle) => {
          return <ProductCardForWishList key={curEle.id} product={curEle} />;
        })}
      </div>
    </>
  );
}

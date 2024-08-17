export function addToWishList(product) {
  return {
    type: "ADD_TO_WISHLIST",
    payload: product,
  };
}

export function removeFromWishList(product) {
  return {
    type: "REMOVE_FROM_WISHLIST",
    payload: product,
  };
}

export function addToCart(product) {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
}

export function removeFromCart(product) {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
}

export function removeProductFromCart(product) {
  return {
    type: "REMOVE_PRODUCT_FROM_CART",
    payload: product,
  };
}

export function deleteAll(){
  return{
    type: "DELETE_ALL"
  }
}

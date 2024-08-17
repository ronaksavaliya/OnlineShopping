import React, { useContext } from "react";
import { cartContext } from "../../App";

export default function AddToCart({ product }) {
  const { cart, increseQuantity, decreseQuantity } = useContext(cartContext);
  const quantity = !cart[product.id] ? 0 : cart[product.id].quantity;

  function handleIncrease() {
    increseQuantity(product);
  }

  function handleDecrese() {
    decreseQuantity(product);
  }

  if (quantity === 0) {
    return (
      <>
        <div>
          <button onClick={handleIncrease}> Add to cart </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <button onClick={handleDecrese}> - </button>
           {quantity} 
          <button onClick={handleIncrease}> + </button>
        </div>
      </>
    );
  }
}

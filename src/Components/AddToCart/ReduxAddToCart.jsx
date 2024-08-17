import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Store/actions/forCart";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";


export default function AddToCart({ product }) {
  console.log(product.id);

  const quantity = useSelector((state) => {
    return state.cartReducer[product.id]
      ? state.cartReducer[product.id].quantity
      : 0;
  });

  //const cart = useSelector((state)=>{return state.cartReducer})
  //const quantity = !cart[product.id] ? 0 : cart[product.id].quantity;
  // am karvathi badhi product mate call thase. console.log karyu 6 e check kari levu

  // const quantity = useSelector((state) => {
  //     return state.cartReducer[product.id]?.quantity || 0;
  //   });
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(addToCart(product));
  }

  function handleDecrese() {
    dispatch(removeFromCart(product));
  }

  if (quantity === 0) {
    return (
      <>
        <div style={{ height: "30px" }}>
          <Button variant="outlined" onClick={handleIncrease}>
            Add to cart
          </Button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div style={{ height: "30px" }}>
          <Button
            variant="outlined"
            onClick={handleDecrese}
            sx={{
              marginRight: "10px",
              maxWidth: "30px",
              maxHeight: "30px",
              minWidth: "30px",
              minHeight: "30px",
            }}
          >
            -
          </Button>
          {quantity}
          <Button
            variant="outlined"
            onClick={handleIncrease}
            sx={{
              marginLeft: "10px",
              maxWidth: "30px",
              maxHeight: "30px",
              minWidth: "30px",
              minHeight: "30px",
              
            }}
          >
            +
          </Button>
        </div>
      </>
    );
  }
}

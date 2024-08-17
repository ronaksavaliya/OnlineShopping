// import { omit } from "lodash";

// state = {
//   productid : productdetails,
//   productid : productdetails,
//   .
//   .
//   .
//   total : totalproduct in cart
// }

export function cartReducer(state = { total: 0 }, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;

      const tempstate = { ...state };

      if (tempstate[product.id]) {
        tempstate[product.id].quantity += 1;
      } else {
        tempstate[product.id] = {
          id: product.id,
          title: product.title,
          images: [...product.images],
          features: [...product.features],
          rating: { ...product.rating },
          price: { value: product.price.value },
          quantity: 1,
        };
      }

      tempstate["total"] = tempstate["total"] + 1;

      return tempstate;

      //   if (state[product.id]) {
      //     return {
      //       ...state,
      //       [product.id]: {
      //         ...state[product.id],
      //         quantity: state[product.id].quantity + 1,
      //       },
      //     };
      //   } else {
      //     return {
      //       ...state,
      //       [product.id]: {
      //         ...product,
      //         quantity: 1,
      //       },
      //     };
      //   }
    }

    case "REMOVE_FROM_CART": {
      const product = action.payload;
      const tempstate = { ...state };

      tempstate[product.id].quantity--;

      if (tempstate[product.id].quantity === 0) delete tempstate[product.id];

      tempstate["total"] = tempstate["total"] - 1;
      return tempstate;
    }

    case "REMOVE_PRODUCT_FROM_CART": {
      const product = action.payload;
      const tempstate = { ...state };

      tempstate["total"] = tempstate["total"] - tempstate[product.id].quantity;

      delete tempstate[product.id];

      return tempstate;
    }

    case "DELETE_ALL": {
      return { total: 0 };
    }

    default:
      return state;
  }
}

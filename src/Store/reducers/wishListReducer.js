const intialState = {};

export function wishListReducer(state = intialState, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
        console.log('abs')
      const product = action.payload;
      return {
        ...state,
        [product.id]: { ...product },
      };
    }

    case "REMOVE_FROM_WISHLIST": {
      const product = action.payload;
      const tempState = { ...state };

      delete tempState[product.id];

      return tempState;
    }

    default:
      return state;
  }
}

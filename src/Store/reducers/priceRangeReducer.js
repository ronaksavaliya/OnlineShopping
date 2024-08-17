export function priceRangeReducer(state = [], action) {
  switch (action.type) {
    case "SET_PRODUCTS_BW_PRICE_RANGE": {
      let products = action.payload1;
      let newProducts;
      const range = action.payload2;

      newProducts = products.filter((curEle) => {
        return curEle.price.value >= range[0] && curEle.price.value <= range[1];
      });
      return newProducts;
    }

    default:
      return state;
  }
}

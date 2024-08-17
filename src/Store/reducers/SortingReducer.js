export function SortingReducer(state = [], action) {
    
  switch (action.type) {
    case "PRICE_LOW_TO_HIGH": {
        
      let products = action.payload;

      products.sort((a, b) => {
        return a.price.value - b.price.value;
      });

      return products;
    }

    case "PRICE_HIGH_TO_LOW": {
      let products = action.payload;

      products.sort((a, b) => {
        return b.price.value - a.price.value;
      });

      return products;
    }

    default:
      return state;
  }
}

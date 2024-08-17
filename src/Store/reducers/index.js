import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { ProductDetailsReducer } from "./ProductDetailsReducer";
import { SortingReducer } from "./SortingReducer";
import { wishListReducer } from "./wishListReducer";
import { priceRangeReducer } from "./priceRangeReducer";

const reducers = combineReducers({
  cartReducer: cartReducer,
  ProductDetailsReducer: ProductDetailsReducer,
  SortingReducer: SortingReducer,
  wishListReducer: wishListReducer,
  priceRangeReducer: priceRangeReducer,
});

export { reducers };

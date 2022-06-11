import { combineReducers } from "redux";
import cardReducer from "../cartReducer";
import productReducer from "./productReducer";
import trendReducer from "./trendReducer";

const rootReducers = combineReducers({
  trendState: trendReducer,
  productState: productReducer,
  cartState: cardReducer,
});

export default rootReducers;

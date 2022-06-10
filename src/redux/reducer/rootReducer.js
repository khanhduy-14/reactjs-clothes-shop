import { combineReducers } from "redux";
import productReducer from "./productReducer";
import trendReducer from "./trendReducer";

const rootReducers = combineReducers({
  trendState: trendReducer,
  productState: productReducer,
});

export default rootReducers;

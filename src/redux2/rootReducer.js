import { combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer";
import productReducer from "./Products/productReducer";
import userReducer from "./User/userReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import trendReducer from "./Trend/trendReducer"

export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productReducer,
  cartData: cartReducer,
  trendData: trendReducer,
});

const configStorage = {
  key: "root",
  storage,
  whiteList: ["cartData"],
};
export default persistReducer(configStorage,rootReducer);

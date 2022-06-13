import { combineReducers } from "redux";

import userReducer from "./User/userReducer";

export default combineReducers({
  user: userReducer,
});

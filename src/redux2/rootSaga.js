import { all, call } from "redux-saga/effects";
import productSaga from "./Products/productSaga";
import userSaga from "./User/userSaga";

export default function* rootSaga() {
  yield all([call(userSaga), call(productSaga)]);
}

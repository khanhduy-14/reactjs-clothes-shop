import { takeLatest, put, all, call } from "redux-saga/effects";
import { setProducts, viewProduct } from "./productAction";
import productTypes from "./productTypes";
import { handleFetchProducts } from "./productHelper";

export function* fetchProducts() {
  try {
    const products = yield handleFetchProducts();
    yield put(setProducts(products));
  } catch (err) {
    // console.log(err);
  }
}
export function* onFetchProductsStart() {
  yield takeLatest(productTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* handleViewProduct({ payload: { item } }) {
  try {
    yield put(viewProduct(item));
  } catch (error) {
    // console.log(error);
  }
}

export function* onViewProductStart() {
  yield takeLatest(productTypes.VIEW_PRODUCT_START, handleViewProduct);
}

export default function* productSaga() {
  yield all([call(onFetchProductsStart), call(onViewProductStart)]);
}

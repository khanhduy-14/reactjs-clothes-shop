import { takeLatest, put, all, call } from "redux-saga/effects";
import { fetchProductsStart, setProducts, viewProduct } from "./productAction";
import productTypes from "./productTypes";
import {
  handleAddProduct,
  handleDeleteProduct,
  handleFetchProducts,
  handleUpdateProduct,
} from "./productHelper";

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

export function* addProduct({ payload: { name, image, price, color, size } }) {
  try {
    yield handleAddProduct({
      name,
      image,
      price,
      color,
      size,
    });
    yield put(fetchProductsStart());
  } catch (err) {
    // console.log(err);
  }
}

export function* onAddProductStart() {
  yield takeLatest(productTypes.ADD_NEW_PRODUCT_START, addProduct);
}
export function* deleteProduct({ payload }) {
  try {
    yield handleDeleteProduct(payload);
    yield put(fetchProductsStart());
  } catch (err) {
    // console.log(err);
  }
}

export function* updateProduct({
  payload: { id, name, image, price, color, size },
}) {
  try {
    yield handleUpdateProduct({
      id,
      name,
      image,
      price,
      color,
      size,
    });
    yield put(fetchProductsStart());
    window.location.href = "/admin";
  } catch (err) {
    // console.log(err);
  }
}

export function* onUpdateProductStart() {
  yield takeLatest(productTypes.UPDATE_PRODUCT, updateProduct);
}

export function* onDeleteProductStart() {
  yield takeLatest(productTypes.DELETE_PRODUCT_START, deleteProduct);
}

export default function* productSaga() {
  yield all([
    call(onFetchProductsStart),
    call(onViewProductStart),
    call(onAddProductStart),
    call(onDeleteProductStart),
    call(onUpdateProductStart),
  ]);
}

import productTypes from "./productTypes";

export const fetchProductsStart = () => ({
  type: productTypes.FETCH_PRODUCTS_START,
});

export const setProducts = (products) => ({
  type: productTypes.SET_PRODUCTS,
  payload: products,
});

export const viewProductStart = (product) => ({
  type: productTypes.VIEW_PRODUCT_START,
  payload: product,
});

export const viewProduct = (product) => ({
  type: productTypes.VIEW_PRODUCT,
  payload: product,
});

export const resetViewProduct=()=>({
  type:productTypes.RESET_VIEW_PRODUCT
});

export const chooseColor=(color)=>({
  type:productTypes.CHOOSE_COLOR,
  payload:color,
})

export const chooseSize=(size)=>({
  type:productTypes.CHOOSE_SIZE,
  payload:size,
})

export const resetAfterAddCart=()=>({
type: productTypes.RESET_AFTER_ADD_CART,
});
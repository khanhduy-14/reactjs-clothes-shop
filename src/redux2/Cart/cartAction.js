import cartType from "./cartType";

export const addCartOne = (product) => ({
  type: cartType.ADD_CART_ONE,
  payload: product,
});

export const addCartNew = (product) => ({
  type: cartType.ADD_CART_NEW,
  payload: product,
});

export const deleteCartOne = (product) => ({
  type: cartType.DELETE_CART_ONE,
  payload: product,
});

export const minusCartOne = (product) => ({
  type: cartType.MINUS_CART_ONE,
  payload: product,
});

export const viewCartItems = () => ({
  type: cartType.VIEW_CART,
});

export const closeCartItems = () => ({
  type: cartType.ClOSE_CART,
});

export const clearCart = () => ({
  type: cartType.CLEAR_CART,
});

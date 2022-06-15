import cartType from "./cartType";

const INITIAL_STATE = {
  cartItems: [],
  viewCart: false,
  countItems: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartType.ADD_CART_ONE:
      return {
        ...state,
        cartItems: state.cartItems.map((product) => {
          if (
            product.id === action.payload.id &&
            product.chooseColor === action.payload.chooseColor &&
            product.chooseSize === action.payload.chooseSize
          ) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        }),
      };
    case cartType.MINUS_CART_ONE:
      return {
        ...state,
        cartItems: state.cartItems.map((product) => {
          if (
            product.id === action.payload.id &&
            product.chooseColor === action.payload.chooseColor &&
            product.chooseSize === action.payload.chooseSize
          ) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        }),
      };
    case cartType.ADD_CART_NEW:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        countItems: state.countItems + 1,
      };
    case cartType.DELETE_CART_ONE:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) =>
            product.id + product.chooseSize + product.chooseColor !==
            action.payload.id +
              action.payload.chooseSize +
              action.payload.chooseColor
        ),
        countItems: state.countItems - 1,
      };
    case cartType.VIEW_CART:
      return {
        ...state,
        viewCart: true,
      };
    case cartType.ClOSE_CART:
      return {
        ...state,
        viewCart: false,
      };
    case cartType.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        countItems: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;

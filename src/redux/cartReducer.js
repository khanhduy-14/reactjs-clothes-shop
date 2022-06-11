const initialState = {
  cartItems: [],
  loading: false,
  error: undefined,
};

function cardReducer(state = initialState, action) {
  switch (action.type) {
    case "card/add_request":
      return {
        ...state,
        loading: true,
      };

    case "card/add_success":
      return {
        ...state,
        loading: false,
        cartItems: [...state.cartItems, action.payload],
      };

    case "card/add_error":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "card/add_one":
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
    case "card/delete_item":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) =>
            product.id + product.chooseSize + product.chooseColor !==
            action.payload.id +
              action.payload.chooseSize +
              action.payload.chooseColor
        ),
      };
    case "card/minus_one":
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
    case "cart/clear":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
}

export default cardReducer;

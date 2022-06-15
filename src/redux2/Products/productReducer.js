import productTypes from "./productTypes";

const INITIAL_STATE = {
  products: [],
  product: [],
  viewProduct: false,
  loading: false,
  chooseColor: null,
  chooseSize: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case productTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case productTypes.VIEW_PRODUCT:
      return {
        ...state,
        product: action.payload,
        viewProduct: true,
      };
    case productTypes.RESET_VIEW_PRODUCT:
      return {
        ...state,
        product: [],
        viewProduct: false,
        chooseColor: null,
        chooseSize: null,
      };
      case productTypes.RESET_AFTER_ADD_CART:
        return {
          ...state,
          chooseColor: null,
          chooseSize: null,
        };
    case productTypes.CHOOSE_COLOR:
      return {
        ...state,
        chooseColor: action.payload,
      };
    case productTypes.CHOOSE_SIZE:
      return {
        ...state,
        chooseSize: action.payload,
      };
      
    default:
      return state;
  }
};

export default productReducer;

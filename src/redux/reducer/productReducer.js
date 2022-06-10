const initialState = {
  data: [],
  loading: false,
  error: undefined,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "product/fetch_request":
      return {
        ...state,
        loading: true,
      };

    case "product/fetch_success":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case "product/fetch_error":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default productReducer;

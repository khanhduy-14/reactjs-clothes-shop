const initialState = {
  data: [],
  loading: false,
  error: undefined,
  viewdetail: false,
  item: [1],
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
    case "product/viewdetail_clicked":
      return {
        ...state,
        viewdetail: true,
        item: action.payload,
      };
    case "product/viewdetail_delete":
      return {
        ...state,
        viewdetail: false,
      };
    default:
      return state;
  }
}

export default productReducer;

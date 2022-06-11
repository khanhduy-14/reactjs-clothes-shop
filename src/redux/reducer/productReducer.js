const initialState = {
  data: [],
  loading: false,
  error: undefined,
  viewdetail: false,
  item: [1],
  chooseColor: null,
  chooseSize: null,
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
    case "product/choose_color":
      return {
        ...state,
        chooseColor: action.payload,
      };
    case "product/choose_size":
      return {
        ...state,
        chooseSize: action.payload,
      };
    case "product/addtocard":
      return {
        ...state,
        chooseColor: null,
        chooseSize: null,
      };

    default:
      return state;
  }
}

export default productReducer;

import trendTypes from "./trendType";

const INITIAL_STATE = {
  trends: [],
  loading: false,
};

const trendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case trendTypes.FETCH_TREND_START:
      return {
        ...state,
        loading: true,
      };
    case trendTypes.SET_TREND:
      return {
        ...state,
        trends: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default trendReducer;

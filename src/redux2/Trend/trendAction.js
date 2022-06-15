import trendTypes from "./trendType";

export const fetchTrendsStart = () => ({
  type: trendTypes.FETCH_TREND_START,
});

export const setTrends = (trends) => ({
  type: trendTypes.SET_TREND,
  payload: trends,
});

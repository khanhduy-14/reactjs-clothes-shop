import { takeLatest, put, all, call } from "redux-saga/effects";
import { setTrends } from "./trendAction";
import trendTypes from "./trendType";
import { handleFetchTrends } from "./trendHelper";

export function* fetchTrends() {
  try {
    const trends = yield handleFetchTrends();
    yield put(setTrends(trends));
  } catch (err) {
    // console.log(err);
  }
}
export function* onFetchTrendsStart() {
  yield takeLatest(trendTypes.FETCH_TREND_START, fetchTrends);
}

export default function* trendSaga() {
  yield all([call(onFetchTrendsStart)]);
}

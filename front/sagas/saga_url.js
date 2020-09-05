import { all, delay, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import {
  URL_CUT_REQUEST,
  URL_CUT_SUCCESS,
  URL_CUT_FAILURE,
} from "../reducers/reducer_url";

function urlCutAPI() {
  return axios.post("/api/urlCut");
}

function* urlCut() {
  try {
    // const result = yield call(urlCutAPI); // axios 이용할 때
    const result = "Saga를 이용한 단축된 URL";
    yield delay(3000);
    yield put({
      type: URL_CUT_SUCCESS,
      //   data: result.data, // axios 이용할 때
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: URL_CUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchUrlCut() {
  yield takeLatest(URL_CUT_REQUEST, urlCut);
}

export default function* urlSaga() {
  yield all([fork(watchUrlCut)]);
}

import { all, delay, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import shortid from "shortid";

import {
  URL_CUT_REQUEST,
  URL_CUT_SUCCESS,
  URL_CUT_FAILURE,
  LOAD_USER_URLS_REQUEST,
  LOAD_USER_URLS_SUCCESS,
  LOAD_USER_URLS_FAILURE,
} from "../reducers/reducer_url";

const dataSource = [
  {
    id: shortid.generate(),
    key: "url" + shortid.generate(),
    url: "kasd2",
    originalUrl: "zzzz",
    urlTitle: "아리아나 그란데 - Google 검색",
    linkOption: "-",
    createdAt: new Date("2020-09-18 00:00:00"),
    clickCount: 0,
  },
  {
    id: shortid.generate(),
    key: "url" + shortid.generate(),
    url: "kasd1",
    originalUrl: "zzzz",
    urlTitle: "not shy - Google 검색",
    linkOption: "-",
    createdAt: new Date("2020-09-17 22:25:00"),
    clickCount: 0,
  },
  {
    id: shortid.generate(),
    key: "url" + shortid.generate(),
    url: "kasd2",
    originalUrl: "zzzz2",
    urlTitle: "naver - Google 검색",
    linkOption: "-",
    createdAt: new Date("2020-09-16 22:25:00"),
    clickCount: 100,
  },
  {
    id: shortid.generate(),
    key: "url" + shortid.generate(),
    url: "kasd3",
    originalUrl: "zzzz3",
    urlTitle: "빌리 아일리시 - Google 검색",
    linkOption: "-",
    createdAt: new Date("2020-09-09 22:25:00"),
    clickCount: 30,
  },
  {
    id: shortid.generate(),
    key: "url" + shortid.generate(),
    url: "kasd4",
    originalUrl: "zzzz4",
    urlTitle: "IU - Google 검색",
    linkOption: "-",
    createdAt: new Date("2020-08-15 22:25:00"),
    clickCount: 9,
  },
  {
    id: shortid.generate(),
    key: "url" + shortid.generate(),
    url: "kasd5",
    originalUrl: "zzzz5",
    urlTitle: "알파고 - Google 검색",
    linkOption: "-",
    createdAt: new Date("2020-01-17 22:25:00"),
    clickCount: 7,
  },
];

function loadUrlInfoAPI() {
  return axios.post("/api/loadUrlInfo");
}

function* loadUrlInfo() {
  try {
    // const result = yield call(urlCutAPI); // axios 이용할 때
    // yield delay(1000);
    yield put({
      type: LOAD_USER_URLS_SUCCESS,
      //   data: result.data, // axios 이용할 때
      data: dataSource,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_USER_URLS_FAILURE,
      error: err.response.data,
    });
  }
}

function urlCutAPI() {
  return axios.post("/api/urlCut");
}

function* urlCut() {
  try {
    // const result = yield call(urlCutAPI); // axios 이용할 때
    const result = "Saga를 이용한 단축된 URL";
    yield delay(2000);
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

function* watchLoadUrlInfo() {
  yield takeLatest(LOAD_USER_URLS_REQUEST, loadUrlInfo);
}

function* watchUrlCut() {
  yield takeLatest(URL_CUT_REQUEST, urlCut);
}

export default function* urlSaga() {
  yield all([fork(watchLoadUrlInfo), fork(watchUrlCut)]);
}

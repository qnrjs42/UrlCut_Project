import {
  all,
  delay,
  fork,
  put,
  takeLatest,
  call,
  throttle,
  takeLeading,
} from "redux-saga/effects";
import axios from "axios";
import shortid from "shortid";
import faker from "faker";
faker.locale = "ko";

import {
  URL_CUT_REQUEST,
  URL_CUT_SUCCESS,
  URL_CUT_FAILURE,
  LOAD_USER_URLS_REQUEST,
  LOAD_USER_URLS_SUCCESS,
  LOAD_USER_URLS_FAILURE,
  REMOVE_URLS_REQUEST,
  REMOVE_URLS_SUCCESS,
  REMOVE_URLS_FAILURE,
  TABLE_PAGINATION_REQUEST,
  TABLE_PAGINATION_SUCCESS,
  TABLE_PAGINATION_FAILURE,
  LOAD_STORAGE_URLS_REQUEST,
  LOAD_STORAGE_URLS_SUCCESS,
  LOAD_STORAGE_URLS_FAILURE,
  LOAD_EXPIRED_URLS_REQUEST,
  LOAD_EXPIRED_URLS_SUCCESS,
  LOAD_EXPIRED_URLS_FAILURE,
  MOVEMENT_URLS_REQUEST,
  MOVEMENT_URLS_SUCCESS,
  MOVEMENT_URLS_FAILURE,
} from "../reducers/reducer_url";

import {
  dummyUrl,
  dummyUrlInfoIds,
  dummyStorageUrlInfoIds,
  dummyExpiredUrlInfoIds,
} from "./dummyUrl";

function tablePaginationAPI() {
  return axios.post("/url");
}

function* tablePagination(action) {
  try {
    // const result = yield call(urlCutAPI); // axios 이용할 때
    // yield delay(1000);

    const result = dummyUrl(action.data);
    yield put({
      type: TABLE_PAGINATION_SUCCESS,
      //   data: result.data, // axios 이용할 때
      data: result,
      sender: action.data.sender,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: TABLE_PAGINATION_FAILURE,
      error: err.response.data,
    });
  }
}

function loadUrlsInfoAPI() {
  return axios.post("/url");
}

function* loadUrlsInfo(action) {
  try {
    // const result = yield call(urlCutAPI); // axios 이용할 때
    // yield delay(1000);

    const result = dummyUrl(action.data);

    yield put({
      type: LOAD_USER_URLS_SUCCESS,
      //   data: result.data, // axios 이용할 때
      data: result,
      urlInfoIds: dummyUrlInfoIds(),
      storageUrlInfoIds: dummyStorageUrlInfoIds(),
      expiredUrlInfoIds: dummyExpiredUrlInfoIds(),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_USER_URLS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadStorageUrlsInfoAPI() {
  return axios.post("/url");
}

function* loadStorageUrlsInfo(action) {
  try {
    // const result = yield call(urlCutAPI); // axios 이용할 때
    // yield delay(1000);

    const result = dummyUrl(action.data);

    yield put({
      type: LOAD_STORAGE_URLS_SUCCESS,
      //   data: result.data, // axios 이용할 때
      data: result,
      urlInfoIds: dummyUrlInfoIds(),
      storageUrlInfoIds: dummyStorageUrlInfoIds(),
      expiredUrlInfoIds: dummyExpiredUrlInfoIds(),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_STORAGE_URLS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadExpiredUrlsInfoAPI() {
  return axios.post("/url");
}

function* loadExpiredUrlsInfo(action) {
  try {
    // const result = yield call(urlCutAPI); // axios 이용할 때
    // yield delay(1000);

    const result = dummyUrl(action.data);

    yield put({
      type: LOAD_EXPIRED_URLS_SUCCESS,
      //   data: result.data, // axios 이용할 때
      data: result,
      urlInfoIds: dummyUrlInfoIds(),
      storageUrlInfoIds: dummyStorageUrlInfoIds(),
      expiredUrlInfoIds: dummyExpiredUrlInfoIds(),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_EXPIRED_URLS_FAILURE,
      error: err.response.data,
    });
  }
}

function urlCutAPI(data) {
  return axios.post("/url/urlCut");
}

function* urlCut(action) {
  try {
    // const result = yield call(urlCutAPI, action.data); // axios 이용할 때
    // const result = "Saga를 이용한 단축된 URL";

    const dummyDataSource = {
      id: shortid.generate(),
      key: "url" + shortid.generate(),
      shortenUrl: "link-project.com/" + shortid.generate(),
      originalUrl: action.data,
      urlTitle: faker.name.findName() + " - Google 검색",
      linkOption: ["none"],
      createdAt: new Date(),
      clickCount: faker.random.number({ min: 0, max: 500 }),
      urlPassword: null,
    };

    yield delay(1000);
    yield put({
      type: URL_CUT_SUCCESS,
      //   data: result.data, // axios 이용할 때
      data: dummyDataSource,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: URL_CUT_FAILURE,
      error: err.response.data,
    });
  }
}

function removeUrlsAPI(data) {
  return axios.post("/url/removeUrl");
}

function* removeUrls(action) {
  try {
    // const result = yield call(removeUrlAPI, action.data); // axios 이용할 때
    // const result = "Saga를 이용한 단축된 URL";
    // yield delay(1000);
    yield put({
      type: REMOVE_URLS_SUCCESS,
      //   data: result.data, // axios 이용할 때
      data: {
        removeIds: action.data.removeIds,
        sender: action.data.sender,
      },
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_URLS_FAILURE,
      error: err.response.data,
    });
  }
}

function moveMentUrlsAPI(data) {
  return axios.post("/url/storageMoveUrls");
}

function* moveMentUrls(action) {
  try {
    // const result = yield call(storageMoveUrlAPI, action.data); // axios 이용할 때
    // const result = "Saga를 이용한 단축된 URL";
    // yield delay(1000);

    yield put({
      type: MOVEMENT_URLS_SUCCESS,
      //   data: result.data, // axios 이용할 때
      data: {
        moveMentIds: action.data.moveMentIds,
        sender: action.data.sender,
      },
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MOVEMENT_URLS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchTablePagination() {
  yield takeLatest(TABLE_PAGINATION_REQUEST, tablePagination);
}

function* watchLoadUrlsInfo() {
  yield takeLatest(LOAD_USER_URLS_REQUEST, loadUrlsInfo);
}

function* watchLoadStorageUrlsInfo() {
  yield takeLatest(LOAD_STORAGE_URLS_REQUEST, loadStorageUrlsInfo);
}

function* watchLoadExpiredUrlsInfo() {
  yield takeLatest(LOAD_EXPIRED_URLS_REQUEST, loadExpiredUrlsInfo);
}

function* watchUrlCut() {
  yield takeLatest(URL_CUT_REQUEST, urlCut);
}

function* watchRemoveUrls() {
  yield takeLatest(REMOVE_URLS_REQUEST, removeUrls);
}

function* watchmoveMentUrls() {
  yield takeLatest(MOVEMENT_URLS_REQUEST, moveMentUrls);
}

export default function* urlSaga() {
  yield all([
    fork(watchTablePagination),
    fork(watchLoadUrlsInfo),
    fork(watchLoadStorageUrlsInfo),
    fork(watchLoadExpiredUrlsInfo),
    fork(watchUrlCut),
    fork(watchRemoveUrls),
    fork(watchmoveMentUrls),
  ]);
}

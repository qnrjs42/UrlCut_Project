import {
  all,
  delay,
  fork,
  put,
  call,
  throttle,
  takeLeading,
} from "redux-saga/effects";
import * as Effects from "redux-saga/effects";
import axios from "axios";
import shortid from "shortid";
import faker from "faker";
faker.locale = "ko";

import {
  ItableMovementSaga,
  ItablePaginationSaga,
  ItableRemoveSaga,
} from "../interface";

const takeLatest: any = Effects.takeLatest;
// const takeLatest = <T, K>(_x: T, y: K): K => y;

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
  RESET_URLS_INFO_REQUEST,
  RESET_URLS_INFO_SUCCESS,
  RESET_URLS_INFO_FAILURE,
  SEARCH_URLS_REQUEST,
  SEARCH_URLS_SUCCESS,
  SEARCH_URLS_FAILURE,
  RESET_SEARCH_URLS_REQUEST,
  RESET_SEARCH_URLS_SUCCESS,
  RESET_SEARCH_URLS_FAILURE,
} from "../actions/action_url";

import {
  dummyUrl,
  dummyUrlInfoIds,
  dummyStorageUrlInfoIds,
  dummyExpiredUrlInfoIds,
} from "./dummyUrl";

function tablePaginationAPI() {
  return axios.post("/url");
}

function* tablePagination(action: ItablePaginationSaga) {
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

interface loadUrlInfoTypes {
  data: {
    page: number;
    limit: number;
  };
}

function* loadUrlsInfo(action: loadUrlInfoTypes) {
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

function* loadStorageUrlsInfo(action: loadUrlInfoTypes) {
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

function* loadExpiredUrlsInfo(action: loadUrlInfoTypes) {
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

function urlCutAPI() {
  return axios.post("http://localhost:5000/api/urlcut");
}
interface urlCutTypes {
  data: string;
}

function* urlCut(action: urlCutTypes) {
  try {
    const result = yield call(urlCutAPI); // axios 이용할 때
    // const result = "Saga를 이용한 단축된 URL";
    console.log("server result", result);
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

function removeUrlsAPI() {
  return axios.post("/url/removeUrl");
}

function* removeUrls(action: ItableRemoveSaga) {
  try {
    // const result = yield call(removeUrlAPI, action.data); // axios 이용할 때
    // const result = "Saga를 이용한 단축된 URL";
    // yield delay(1000);
    console.log("sage remove action", action);
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

function moveMentUrlsAPI() {
  return axios.post("/url/storageMoveUrls");
}

function* moveMentUrls(action: ItableMovementSaga) {
  try {
    // const result = yield call(storageMoveUrlAPI, action.data); // axios 이용할 때
    // const result = "Saga를 이용한 단축된 URL";
    // yield delay(1000);
    console.log("saga moveMent action", action);
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

// function resetUrlsInfoAPI(data) {
//   return axios.post("/url/storageMoveUrls");
// }

function* resetUrlsInfo() {
  try {
    yield put({
      type: RESET_URLS_INFO_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RESET_URLS_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function searchUrlsAPI() {
  return axios.post("/url/storageMoveUrls");
}

function* searchUrls() {
  try {
    const data = {
      page: 1,
      limit: 20,
    };
    const result = dummyUrl(data);

    yield put({
      type: SEARCH_URLS_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SEARCH_URLS_FAILURE,
      error: err.response.data,
    });
  }
}

// function resetSearchUrlsAPI(data) {
//   return axios.post("/url/storageMoveUrls");
// }

function* resetSearchUrls() {
  try {
    yield put({
      type: RESET_SEARCH_URLS_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RESET_SEARCH_URLS_FAILURE,
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

function* watchMoveMentUrls() {
  yield takeLatest(MOVEMENT_URLS_REQUEST, moveMentUrls);
}

function* watchResetUrlsInfo() {
  yield takeLatest(RESET_URLS_INFO_REQUEST, resetUrlsInfo);
}

function* watchSearchUrls() {
  yield takeLatest(SEARCH_URLS_REQUEST, searchUrls);
}

function* watchResetSearchUrls() {
  yield takeLatest(RESET_SEARCH_URLS_REQUEST, resetSearchUrls);
}

export default function* urlSaga() {
  yield all([
    fork(watchTablePagination),
    fork(watchLoadUrlsInfo),
    fork(watchLoadStorageUrlsInfo),
    fork(watchLoadExpiredUrlsInfo),
    fork(watchUrlCut),
    fork(watchRemoveUrls),
    fork(watchMoveMentUrls),
    fork(watchResetUrlsInfo),
    fork(watchSearchUrls),
    fork(watchResetSearchUrls),
  ]);
}

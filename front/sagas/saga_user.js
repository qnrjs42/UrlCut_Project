import { all, fork, takeLatest, put, delay, call } from "redux-saga/effects";

import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOAD_MY_INFO_REQUEST,
  CHANGE_NICKNAME_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  CHANGE_NICKNAME_SUCCESS,
  CHANGE_NICKNAME_FAILURE,
} from "../reducers/reducer_user";

const dummyUser = (data) => ({
  id: 1,
  email: data,
  nickname: "테스터1",
  service: {
    usedUrl: 10,
    membership: "free",
  },
  clickCount: {
    1: 5,
    5: 17,
    10: 30,
    11: 1,
    14: 122,
    18: 3,
    21: 10,
  },
});

function loginAPI(data) {
  // return axios.post("/api/login", data);
  localStorage.setItem("me", JSON.stringify(dummyUser(data))); // Object Object 뜨면 서버 재시작
  return dummyUser(data);
}

function* logIn(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield delay(1000); // 가짜 데이터인척하고 시간 지연
    // const result = yield call(loginAPI, action.data); // 아직 서버가 없어서 요청을 못 보냄
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  // return axios.post("/api/logout");
  localStorage.removeItem("me");
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);

    yield call(logOutAPI);
    yield delay(1000); // 가짜 데이터

    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post("/api/signUp", data);
}

function* signUp(action) {
  try {
    // const result = yield call(signUpAPI, action.data);

    yield delay(1000); // 가짜 데이터
    console.log("saga의 signUp Action", action);

    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function loadMyInfoAPI(data) {
  return axios.post("/api/loadMyInfo", data);
}

function* loadMyInfo() {
  try {
    // const result = yield call(loadMyInfoAPI, action.data);

    const result = window.localStorage.getItem("me");
    console.log("saga의 loadMyInfo result", result);

    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: JSON.parse(result),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function changeNicknameAPI(data) {
  return axios.post("/api/changeNickname", data);
}

function* changeNickname(action) {
  try {
    // const result = yield call(changeNicknameAPI, action.data);

    console.log("saga의 changeNickname Action", action);

    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHANGE_NICKNAME_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchChangeNikname() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchLoadMyInfo),
    fork(watchChangeNikname),
  ]);
}

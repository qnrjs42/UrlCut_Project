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
} from "../reducers/reducer_user";

const dummyUser = (data) => ({
  email: data,
  nickname: "제로초",
  id: 1,
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
    yield put({
      type: SIGN_UP_FAILURE,
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

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchSignUp)]);
}

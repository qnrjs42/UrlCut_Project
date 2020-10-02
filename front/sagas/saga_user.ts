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
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  CHANGE_NICKNAME_FAILURE,
} from "../actions/action_user";

import { dummyUserTypes, signUpSagaType, logInSagaType, changeNicknameTypes } from "../interface";

const dummyUser = (data: string) => {
  return {
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
}};

function loginAPI(data: string): dummyUserTypes {
  // return axios.post("/api/login", data);
  const dummy = dummyUser(data);
  localStorage.setItem("me", JSON.stringify(dummy)); // Object Object 뜨면 서버 재시작
  return dummy;
}

function* logIn(action: logInSagaType) {
  try {
    const result: dummyUserTypes = yield call(loginAPI, action.data.Email);
    yield delay(1000); // 가짜 데이터인척하고 시간 지연
    yield put({
      type: LOG_IN_SUCCESS,
      data: result,
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

// function signUpAPI() {
//   // return axios.post("/api/signUp", data);
// }

// action: signUpSagaType
function* signUp() {
  try {
    // const result = yield call(signUpAPI, action.data);

    yield delay(1000); // 가짜 데이터

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

// function loadMyInfoAPI(data) {
//   return axios.post("/api/loadMyInfo", data);
// }

function* loadMyInfo() {
  try {
    // const result = yield call(loadMyInfoAPI, action.data);
    const result = localStorage.getItem("me");
    let jsonResult: string | null = null;
    if (typeof result === "string") jsonResult = JSON.parse(result);
    else jsonResult = null;
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: jsonResult,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}


interface copyObjTypes {
  [key: string]: string | object;
}

const deepCopy = (obj: object) => {
  const newObj: copyObjTypes = {};
    for ( const list of Object.entries(obj)) {
      newObj[list[0]] = list[1];
    }
  return newObj;
}

function changeNicknameAPI(nickname: string) {
  // return axios.post("/api/changeNickname", data);

  // 1. localStorage의 get me data
  const getMe = localStorage.getItem("me");

  let jsonMe: object | null = null;

  // 2. getMe <- JSON으로 변환
  if (typeof getMe === "string") jsonMe = JSON.parse(getMe);
  else jsonMe = null;

  let newMe: copyObjTypes = {};
  if(jsonMe !== null) {
    // 3. JSON -> object 변환
    newMe = deepCopy(jsonMe);
    // 4. 변환한 object의 nickname 변경
    newMe.nickname = nickname;
  }

  // 5. 기존의 me data 제거
  localStorage.removeItem("me");
  // 6. 수정한 닉네임으로 변경된 오브젝트 localStorage에 저장
  localStorage.setItem("me", JSON.stringify(newMe)); 

  return newMe;
}

function* changeNickname(action: changeNicknameTypes) {
  try {
    const result = yield call(changeNicknameAPI, action.data.nickname);

    console.log('result', result)
      
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
      data: {
        nickname: action.data.nickname
      }
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

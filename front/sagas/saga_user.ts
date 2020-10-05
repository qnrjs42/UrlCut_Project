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
  CHANGE_PROFILE_REQUEST,
  CHANGE_PROFILE_SUCCESS,
  CHANGE_PROFILE_FAILURE,
} from "../actions/action_user";

import {
  IdummyUser,
  IsignUpSaga,
  IlogInSaga,
  IchangeProfileSaga,
} from "../interface";

interface IloginAPI {
  Email: string;
  Password: string;
}

const dummyUser = (data: IloginAPI) => {
  return {
    id: 1,
    email: data.Email,
    password: data.Password,
    nickname: "테스터1",
    publicProfile: true,
    mediaGateway: true,
    service: {
      usedUrl: 259,
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
  };
};

function loginAPI(data: IloginAPI): IdummyUser {
  // return axios.post("/api/login", data);
  const dummy = dummyUser(data);
  localStorage.setItem("me", JSON.stringify(dummy));
  return dummy;
}

function* logIn(action: IlogInSaga) {
  try {
    const result: IdummyUser = yield call(loginAPI, action.data);
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

// action: IsignUpSaga
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

interface IcopyObj {
  [key: string]: string | boolean;
}

const deepCopy = (obj: object) => {
  const newObj: IcopyObj = {};
  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = value;
  }

  return newObj;
};

const convertNewProfile = (obj: IcopyObj, changeProfileData: IcopyObj) => {
  // 객체 프로퍼티 접근을 위해 깊은 복사
  const newObj = deepCopy(obj);

  // 새로운 데이터로 교체
  for (const [key, value] of Object.entries(changeProfileData)) {
    newObj[key] = value;
  }

  return newObj;
};

function changeProfileAPI(changeProfileData: IcopyObj) {
  // return axios.post("/api/changeProfile", data);

  // 1. localStorage의 me 정보 가져오기
  const getMe = localStorage.getItem("me");

  let jsonMe: object | null = null;

  // 2. 가져온 me 정보 JSON으로 변환
  if (typeof getMe === "string") jsonMe = JSON.parse(getMe);
  else jsonMe = null;

  let copyMe: IcopyObj = {};
  let newMe: IcopyObj = {};
  if (jsonMe !== null) {
    // 3. JSON -> object 변환
    copyMe = deepCopy(jsonMe);
    // 4. object로 변환된 me를 새로운 데이터로 대체
    newMe = convertNewProfile(copyMe, changeProfileData);
  }

  // // 5. 기존의 me data 제거
  localStorage.removeItem("me");
  // // 6. 수정한 닉네임으로 변경된 오브젝트 localStorage에 저장
  localStorage.setItem("me", JSON.stringify(newMe));

  return newMe;
}

function* changeProfile(action: IchangeProfileSaga) {
  try {
    const result: IcopyObj = yield call(changeProfileAPI, action.data);

    yield put({
      type: CHANGE_PROFILE_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHANGE_PROFILE_FAILURE,
      error: err.response.data,
    });
  }
}

async function loadMyInfoAPI() {
  let jsonMe: string | null = null;

  if (typeof window !== "undefined") {
    const getMe = localStorage.getItem("me");
    if (typeof getMe === "string") jsonMe = await JSON.parse(getMe);
    else jsonMe = null;
  }
  // console.log()
  // console.log("jsonMe", jsonMe);
  // const me = {
  //   id: 1,
  //   email: "aa",
  //   password: "123",
  //   nickname: "테스터1",
  //   publicProfile: true,
  //   mediaGateway: true,
  //   service: { usedUrl: 259, membership: "free" },
  //   clickCount: {
  //     "1": 5,
  //     "5": 17,
  //     "10": 30,
  //     "11": 1,
  //     "14": 122,
  //     "18": 3,
  //     "21": 10,
  //   },
  // };
  // if (me !== null) {
  //   const result = await axios.post("http://localhost:5000/api/loadMyInfo", me);

  //   if (result.data.success) {
  //     return result.data.me;
  //   }
  //   return null;
  // }

  // await axios
  //   .post("http://localhost:5000/api/loadMyInfo", jsonMe)
  //   .then((res) => {
  //     if (res.data.success === true) {
  //       console.log(JSON.parse(JSON.stringify(res.data.me)));
  //       return JSON.parse(JSON.stringify(res.data.me));
  //     } else {
  //       return null;
  //     }
  //   });
  return jsonMe;
}

function* loadMyInfo() {
  try {
    // const result = yield call(loadMyInfoAPI, action.data);
    const result: IdummyUser | null = yield call(loadMyInfoAPI);

    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
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

function* watchChangeProfile() {
  yield takeLatest(CHANGE_PROFILE_REQUEST, changeProfile);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchLoadMyInfo),
    fork(watchChangeProfile),
  ]);
}

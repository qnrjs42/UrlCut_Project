import { all, fork } from "redux-saga/effects";

// import postSaga from "./post";
import userSaga from "./saga_user";
import urlSaga from './saga_url';

export default function* rootSaga() {
  yield all([ fork(urlSaga), fork(userSaga) ]);
}

import produce from "immer";
import { AnyAction } from "redux";
import {
  ADD_POST_TO_ME,
  CHANGE_PROFILE_FAILURE,
  CHANGE_PROFILE_REQUEST,
  CHANGE_PROFILE_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  REMOVE_POST_OF_ME,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../actions/action_user";

import { IuserInitialState } from "../interface";

export const userInitialState: IuserInitialState = {
  logInLoading: false, // 로그인 시도 중    // Logging이면 로딩화면을 띄워주기위한 역할
  logInDone: false,
  logInError: null,

  logOutLoading: false, // 로그아웃 시도 중
  logOutDone: false,
  logOutError: null,

  signUpLoading: false, // 회원가입 시도 중
  signUpDone: false,
  signUpError: null,

  changeProfileLoading: false, // 회원정보 변경 시도 중
  changeProfileDone: false,
  changeProfileError: null,

  loadMyInfoLoading: false, // 내 정보 로드 시도 중
  loadMyInfoDone: false,
  loadMyInfoError: null,

  me: null,
};

export type IUserReducerState = typeof userInitialState;

const reducer = (state = userInitialState, action: AnyAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        // 로딩할 때는 에러 없애준다
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;

        draft.logOutDone = false;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;

        draft.logInDone = false;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;

        draft.changeProfileDone = false;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_PROFILE_REQUEST:
        draft.changeProfileLoading = true;
        draft.changeProfileError = null;
        draft.changeProfileDone = false;
        break;
      case CHANGE_PROFILE_SUCCESS:
        draft.changeProfileLoading = false;
        draft.changeProfileDone = true;
        draft.me = action.data;
        break;
      case CHANGE_PROFILE_FAILURE:
        draft.changeProfileLoading = false;
        draft.changeProfileError = action.error;
        break;

      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoError = null;
        draft.loadMyInfoDone = false;
        break;
      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.me = action.data;
        draft.loadMyInfoDone = true;

        draft.logInDone = false;
        draft.logOutDone = false;
        draft.changeProfileDone = false;
        break;
      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case ADD_POST_TO_ME:
        // draft.me.urlInfo.unshift({ id: action.data });
        break;

      case REMOVE_POST_OF_ME:
        // draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
        break;

      default:
        break;
    }
  });
export type UserState = typeof reducer;
export default reducer;

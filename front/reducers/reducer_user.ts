import produce from "immer";
import { AnyAction } from "redux";
import {
  ADD_POST_TO_ME,
  CHANGE_MEDIA_GATEWAY_FAILURE,
  CHANGE_MEDIA_GATEWAY_REQUEST,
  CHANGE_MEDIA_GATEWAY_SUCCESS,
  CHANGE_NICKNAME_FAILURE,
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PUBLIC_PROFILE_FAILURE,
  CHANGE_PUBLIC_PROFILE_REQUEST,
  CHANGE_PUBLIC_PROFILE_SUCCESS,
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

  changeNicknameLoading: false, // 닉네임 변경 시도 중
  changeNicknameDone: false,
  changeNicknameError: null,

  changePasswordLoading: false, // 패스워드 변경 시도 중
  changePasswordDone: false,
  changePasswordError: null,

  changePublicProfileLoading: false, // 프로필 공개 변경 시도 중
  changePublicProfileDone: false,
  changePublicProfileError: null,

  changeMediaGatewayLoading: false, // 미디어 게이트웨이 변경 시도 중
  changeMediaGatewayDone: false,
  changeMediaGatewayError: null,

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

        draft.changeNicknameDone = false;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;
      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        if (draft.me?.nickname) draft.me.nickname = action.data.nickname;
        break;
      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case CHANGE_PASSWORD_REQUEST:
        draft.changePasswordLoading = true;
        draft.changePasswordError = null;
        draft.changePasswordDone = false;
        break;
      case CHANGE_PASSWORD_SUCCESS:
        draft.changePasswordLoading = false;
        draft.changePasswordDone = true;
        if (draft.me?.password) draft.me.password = action.data.password;
        break;
      case CHANGE_PASSWORD_FAILURE:
        draft.changePasswordLoading = false;
        draft.changePasswordError = action.error;
        break;

      case CHANGE_PUBLIC_PROFILE_REQUEST:
        draft.changePublicProfileLoading = true;
        draft.changePublicProfileError = null;
        draft.changePublicProfileDone = false;
        break;
      case CHANGE_PUBLIC_PROFILE_SUCCESS:
        draft.changePublicProfileLoading = false;
        draft.changePublicProfileDone = true;
        if (draft.me?.publicProfile)
          draft.me.publicProfile = action.data.publicProfile;
        break;
      case CHANGE_PUBLIC_PROFILE_FAILURE:
        draft.changePublicProfileLoading = false;
        draft.changePublicProfileError = action.error;
        break;

      case CHANGE_MEDIA_GATEWAY_REQUEST:
        draft.changeMediaGatewayLoading = true;
        draft.changeMediaGatewayError = null;
        draft.changeMediaGatewayDone = false;
        break;
      case CHANGE_MEDIA_GATEWAY_SUCCESS:
        draft.changeMediaGatewayLoading = false;
        draft.changeMediaGatewayDone = true;
        if (draft.me?.mediaGateway)
          draft.me.mediaGateway = action.data.mediaGateway;
        break;
      case CHANGE_MEDIA_GATEWAY_FAILURE:
        draft.changeMediaGatewayLoading = false;
        draft.changeMediaGatewayError = action.error;
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
        draft.changeNicknameDone = false;
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
export type UserState = ReturnType<typeof reducer>;
export default reducer;

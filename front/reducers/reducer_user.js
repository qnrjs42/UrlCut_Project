/* eslint-disable indent */
import produce from "immer";

export const initialState = {
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

  me: null,
  signUpdata: {},
  loginData: {},
};

// type을 문자열로 정하면 오타에 취약 그래서 변수로 빼두는게 좋다

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";

export const FOLLOW_REQUEST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "FOLLOW_FAILURE";

export const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const dummyUser = (data) => ({
  email: data,
  nickname: "제로초",
  id: 1
});

const dummySignUpUser = (data) => ({
  email: data,
  nickname: "제로초",
  id: 2,
});

export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const signupRequestAction = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});

// END LOG_IN
// ///////////////////////////////////////////////////

export const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST,
});

// END LOG_OUT
// ///////////////////////////////////////////////////

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        break;

      case LOG_IN_REQUEST:
        // 로딩할 때는 에러 없애준다
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        // me: { ...action.data, nickname: "zerocho" }, // 더미 데이터
        console.log("state", state);
        console.log("action", action);

        localStorage.setItem("me", JSON.stringify(dummyUser(action.data))); // Object Object 뜨면 서버 재시작

        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data); // 더미 데이터
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      // ***** END LOG_IN *****

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      // ***** END LOG_OUT *****

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;

        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      // ***** END SIGN_UP *****

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      // ***** END CHANGE_NICKNAME *****

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
        break;
    }
  });

export default reducer;

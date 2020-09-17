import produce from "immer";

export const initialState = {
  urlCutLoading: false, // URL 단축 시도
  urlCutDone: false,
  urlCutError: null,

  logInLoading: false, // 로그인 시도
  logInDone: false,
  logInError: null,

  logOutLoading: false, // 로그아웃 시도
  logOutDone: false,
  logOutError: null,

  shortenUrl: null,
};

export const URL_CUT_REQUEST = "URL_CUT_REQUEST";
export const URL_CUT_SUCCESS = "URL_CUT_SUCCESS";
export const URL_CUT_FAILURE = "URL_CUT_FAILURE";

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        break;

      case URL_CUT_REQUEST:
        draft.urlCutLoading = true;
        draft.urlCutDone = false;
        draft.urlCutError = null;
        break;
      case URL_CUT_SUCCESS:
        console.log("state", state);
        console.log("action", action);
        draft.urlCutLoading = false;
        draft.urlCutDone = true;
        draft.shortenUrl = action.data;
      case URL_CUT_FAILURE:
        draft.urlCutLoading = false;
        draft.urlCutError = action.error;
    }
  });

export default reducer;

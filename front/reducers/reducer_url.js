import produce from "immer";

export const initialState = {
  shortenUrl: null,

  urlInfo: [],

  urlCutLoading: false, // URL 단축 시도
  urlCutDone: false,
  urlCutError: null,

  loadUserUrlsLoading: false, // 단축된 URL 로드 시도
  loadUserUrlsDone: false,
  loadUserUrlsError: null,
};

export const URL_CUT_REQUEST = "URL_CUT_REQUEST";
export const URL_CUT_SUCCESS = "URL_CUT_SUCCESS";
export const URL_CUT_FAILURE = "URL_CUT_FAILURE";

export const LOAD_USER_URLS_REQUEST = "LOAD_USER_URLS_REQUEST";
export const LOAD_USER_URLS_SUCCESS = "LOAD_USER_URLS_SUCCESS";
export const LOAD_USER_URLS_FAILURE = "LOAD_USER_URLS_FAILURE";

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
        break;
      case URL_CUT_FAILURE:
        draft.urlCutLoading = false;
        draft.urlCutError = action.error;
        break;

      case LOAD_USER_URLS_REQUEST:
        draft.loadUserUrlsLoading = true;
        draft.loadUserUrlsDone = false;
        draft.loadUserUrlsError = null;
        break;
      case LOAD_USER_URLS_SUCCESS:
        draft.loadUserUrlsLoading = false;
        draft.loadUserUrlsDone = true;
        draft.urlInfo = action.data;
        break;
      case LOAD_USER_URLS_FAILURE:
        draft.loadUserUrlsLoading = false;
        draft.loadUserUrlsError = action.error;
        break;
    }
  });

export default reducer;

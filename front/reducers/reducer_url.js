import produce from "immer";
import next from "next";

export const initialState = {
  shortenUrl: null,

  urlInfo: [], // 전체 링크 관리 URL
  urlInfoIds: 0, // 전체 링크 관리 URL 개수

  storageUrlInfo: [], // 링크 보관함 URL
  storageUrlInfoIds: 0, // 링크 보관함 URL 개수

  urlCutLoading: false, // URL 단축 시도
  urlCutDone: false,
  urlCutError: null,

  loadUserUrlsLoading: false, // 단축된 URL, 전체 링크관리 로드 시도
  loadUserUrlsDone: false,
  loadUserUrlsError: null,

  loadStorageUrlsLoading: false, // 링크 보관함 로드 시도
  loadStorageUrlsDone: false,
  loadStorageUrlsError: null,

  removeUrlsLoading: false, // URL 삭제 시도
  removeUrlsDone: false,
  removeUrlsError: null,

  manageMoveUrlsLoading: false, // 전체 링크관리 이동 시도
  manageMoveUrlsDone: false,
  manageMoveUrlsError: null,

  storageMoveUrlsLoading: false, // 링크 보관함 이동 시도
  storageMoveUrlsDone: false,
  storageMoveUrlsError: null,

  tablePaginationLoading: false, // 테이블 페이징 시도
  tablePaginationDone: false,
  tablePaginationError: null,
};

export const URL_CUT_REQUEST = "URL_CUT_REQUEST";
export const URL_CUT_SUCCESS = "URL_CUT_SUCCESS";
export const URL_CUT_FAILURE = "URL_CUT_FAILURE";

export const LOAD_USER_URLS_REQUEST = "LOAD_USER_URLS_REQUEST";
export const LOAD_USER_URLS_SUCCESS = "LOAD_USER_URLS_SUCCESS";
export const LOAD_USER_URLS_FAILURE = "LOAD_USER_URLS_FAILURE";

export const LOAD_STORAGE_URLS_REQUEST = "LOAD_STORAGE_URLS_REQUEST";
export const LOAD_STORAGE_URLS_SUCCESS = "LOAD_STORAGE_URLS_SUCCESS";
export const LOAD_STORAGE_URLS_FAILURE = "LOAD_STORAGE_URLS_FAILURE";

export const REMOVE_URLS_REQUEST = "REMOVE_URLS_REQUEST";
export const REMOVE_URLS_SUCCESS = "REMOVE_URLS_SUCCESS";
export const REMOVE_URLS_FAILURE = "REMOVE_URLS_FAILURE";

export const MANAGE_MOVE_URLS_REQUEST = "MANAGE_MOVE_URLS_REQUEST";
export const MANAGE_MOVE_URLS_SUCCESS = "MANAGE_MOVE_URLS_SUCCESS";
export const MANAGE_MOVE_URLS_FAILURE = "MANAGE_MOVE_URLS_FAILURE";

export const STORAGE_MOVE_URLS_REQUEST = "STORAGE_MOVE_URLS_REQUEST";
export const STORAGE_MOVE_URLS_SUCCESS = "STORAGE_MOVE_URLS_SUCCESS";
export const STORAGE_MOVE_URLS_FAILURE = "STORAGE_MOVE_URLS_FAILURE";

export const TABLE_PAGINATION_REQUEST = "TABLE_PAGINATION_REQUEST";
export const TABLE_PAGINATION_SUCCESS = "TABLE_PAGINATION_SUCCESS";
export const TABLE_PAGINATION_FAILURE = "TABLE_PAGINATION_FAILURE";

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TABLE_PAGINATION_REQUEST:
        draft.tablePaginationLoading = true;
        draft.tablePaginationDone = false;
        draft.tablePaginationError = null;
        break;
      case TABLE_PAGINATION_SUCCESS: {
        console.log(action.data);
        draft.tablePaginationLoading = false;
        draft.tablePaginationDone = true;
        draft.urlInfo = action.data;

        draft.urlCutDone = false;
        draft.loadUserUrlsDone = false;
        draft.removeUrlDone = false;
        break;
      }
      case TABLE_PAGINATION_FAILURE:
        draft.tablePaginationLoading = false;
        draft.tablePaginationError = action.error;
        break;

      case URL_CUT_REQUEST:
        draft.urlCutLoading = true;
        draft.urlCutDone = false;
        draft.urlCutError = null;
        break;
      case URL_CUT_SUCCESS:
        console.log("state", state);
        console.log("action", action.data);
        draft.urlCutLoading = false;
        draft.urlCutDone = true;
        draft.shortenUrl = action.data.shortenUrl;
        draft.urlInfo.pop(); // 배열 마지막 요소 제거하고
        draft.urlInfo.unshift(action.data); // 배열 맨 앞에 실제 데이터 추가

        draft.loadUserUrlsDone = false;
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
        draft.urlInfoIds = action.urlInfoIds;
        draft.storageUrlInfoIds = action.storageUrlInfoIds;
        break;
      case LOAD_USER_URLS_FAILURE:
        draft.loadUserUrlsLoading = false;
        draft.loadUserUrlsError = action.error;
        break;

      case LOAD_STORAGE_URLS_REQUEST:
        draft.loadStorageUrlsLoading = true;
        draft.loadStorageUrlsDone = false;
        draft.loadStorageUrlsError = null;
        break;
      case LOAD_STORAGE_URLS_SUCCESS:
        draft.loadStorageUrlsLoading = false;
        draft.loadStorageUrlsDone = true;
        draft.storageUrlInfo = action.data;
        draft.urlInfoIds = action.urlInfoIds;
        draft.storageUrlInfoIds = action.storageUrlInfoIds;
        break;
      case LOAD_STORAGE_URLS_FAILURE:
        draft.loadStorageUrlsLoading = false;
        draft.loadStorageUrlsError = action.error;
        break;

      case REMOVE_URLS_REQUEST:
        draft.removeUrlsLoading = true;
        draft.removeUrlsDone = false;
        draft.removeUrlsError = null;
        break;
      case REMOVE_URLS_SUCCESS: {
        draft.removeUrlsLoading = false;
        draft.removeUrlsDone = true;
        // draft.urlInfo = draft.urlInfo.filter((v) => v.id !== action.data.id); // 1 개씩 지울 때
        console.log(action.data);
        if (action.data.sender === "linkManage") {
          console.log("linkManage");
          draft.urlInfo = draft.urlInfo.filter(
            (listItem) => !action.data.removeIds.includes(listItem.id)
          ); // 여러 개 지울 때
        } else if (action.data.sender === "linkStorage") {
          console.log("linkStorage");
          draft.storageUrlInfo = draft.storageUrlInfo.filter(
            (listItem) => !action.data.removeIds.includes(listItem.id)
          ); // 여러 개 지울 때
        }

        draft.urlCutDone = false;
        draft.loadUserUrlsDone = false;
        break;
      }
      case REMOVE_URLS_FAILURE:
        draft.removeUrlsLoading = false;
        draft.removeUrlsError = action.error;
        break;

      case STORAGE_MOVE_URLS_REQUEST:
        draft.storageMoveUrlsLoading = true;
        draft.storageMoveUrlsDone = false;
        draft.storageMoveUrlsError = null;
        break;
      case STORAGE_MOVE_URLS_SUCCESS: {
        draft.storageMoveUrlsLoading = false;
        draft.storageMoveUrlsDone = true;

        // draft.storageUrlInfo.unshift(
        //   ...draft.urlInfo.filter((listItem) =>
        //     action.data.includes(listItem.id)
        //   )
        // ); // 여러 개  이동

        draft.urlInfo = draft.urlInfo.filter(
          (listItem) => !action.data.includes(listItem.id)
        ); // 여러 개 지울 때

        draft.urlCutDone = false;
        draft.loadUserUrlsDone = false;
        draft.manageMoveUrlsDone = false;
        draft.removeUrlDone = false;
        break;
      }
      case STORAGE_MOVE_URLS_FAILURE:
        draft.storageMoveUrlsLoading = false;
        draft.storageMoveUrlsError = action.error;
        break;

      case MANAGE_MOVE_URLS_REQUEST:
        draft.manageMoveUrlsLoading = true;
        draft.manageMoveUrlsDone = false;
        draft.manageMoveUrlsError = null;
        break;
      case MANAGE_MOVE_URLS_SUCCESS: {
        draft.manageMoveUrlsLoading = false;
        draft.manageMoveUrlsDone = true;

        // draft.manageUrlInfo.unshift(
        //   ...draft.urlInfo.filter((listItem) =>
        //     action.data.includes(listItem.id)
        //   )
        // ); // 여러 개  이동

        draft.storageUrlInfo = draft.storageUrlInfo.filter(
          (listItem) => !action.data.includes(listItem.id)
        ); // 여러 개 지울 때

        draft.urlCutDone = false;
        draft.loadUserUrlsDone = false;
        draft.storageMoveUrlsDone = false;
        draft.removeUrlDone = false;
        break;
      }
      case MANAGE_MOVE_URLS_FAILURE:
        draft.manageMoveUrlsLoading = false;
        draft.manageMoveUrlsError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;

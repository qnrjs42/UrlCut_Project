import produce from "immer";
import { AnyAction } from "redux";
import {
  URL_CUT_REQUEST,
  URL_CUT_SUCCESS,
  URL_CUT_FAILURE,
  LOAD_USER_URLS_REQUEST,
  LOAD_USER_URLS_SUCCESS,
  LOAD_USER_URLS_FAILURE,
  REMOVE_URLS_REQUEST,
  REMOVE_URLS_SUCCESS,
  REMOVE_URLS_FAILURE,
  TABLE_PAGINATION_REQUEST,
  TABLE_PAGINATION_SUCCESS,
  TABLE_PAGINATION_FAILURE,
  LOAD_STORAGE_URLS_REQUEST,
  LOAD_STORAGE_URLS_SUCCESS,
  LOAD_STORAGE_URLS_FAILURE,
  LOAD_EXPIRED_URLS_REQUEST,
  LOAD_EXPIRED_URLS_SUCCESS,
  LOAD_EXPIRED_URLS_FAILURE,
  MOVEMENT_URLS_REQUEST,
  MOVEMENT_URLS_SUCCESS,
  MOVEMENT_URLS_FAILURE,
  RESET_URLS_INFO_REQUEST,
  RESET_URLS_INFO_SUCCESS,
  RESET_URLS_INFO_FAILURE,
  SEARCH_URLS_REQUEST,
  SEARCH_URLS_SUCCESS,
  SEARCH_URLS_FAILURE,
  RESET_SEARCH_URLS_REQUEST,
  RESET_SEARCH_URLS_SUCCESS,
  RESET_SEARCH_URLS_FAILURE,
} from "../actions/action_url";

import { urlInitialStateTypes } from "../interface";

export const urlInitialState: urlInitialStateTypes = {
  shortenUrl: null,

  urlInfo: [], // 전체 링크 관리 URL
  urlInfoIds: [], // 전체 링크 관리 URL 개수

  storageUrlInfo: [], // 링크 보관함 URL
  storageUrlInfoIds: [], // 링크 보관함 URL 개수

  expiredUrlInfo: [], // 설정기간 만료 URL
  expiredUrlInfoIds: [], // 설정기간 만료 URL 개수

  searchUrlInfo: [], // 검색한 URL

  urlCutLoading: false, // URL 단축 시도
  urlCutDone: false,
  urlCutError: null,

  loadUserUrlsLoading: false, // 단축된 URL, 전체 링크관리 로드 시도
  loadUserUrlsDone: false,
  loadUserUrlsError: null,

  loadStorageUrlsLoading: false, // 링크 보관함 로드 시도
  loadStorageUrlsDone: false,
  loadStorageUrlsError: null,

  loadExpiredUrlsLoading: false, // 설정기간 만료 로드 시도
  loadExpiredUrlsDone: false,
  loadExpiredUrlsError: null,

  removeUrlsLoading: false, // URL 삭제 시도
  removeUrlsDone: false,
  removeUrlsError: null,

  moveMentUrlsLoading: false, // 보관함 이동, 해제 시도
  moveMentUrlsDone: false,
  moveMentUrlsError: null,

  tablePaginationLoading: false, // 테이블 페이징 시도
  tablePaginationDone: false,
  tablePaginationError: null,

  resetUrlsInfoLoading: false, // urls info 초기화 시도
  resetUrlsInfoDone: false,
  resetUrlsInfoError: null,

  searchUrlsLoading: false, // urls 검색 시도
  searchUrlsDone: false,
  searchUrlsError: null,

  resetSearchUrlsLoading: false, // urls 검색 초기화 시도
  resetSearchUrlsDone: false,
  resetSearchUrlsError: null,
};

export type IUrlReducerState = typeof urlInitialState;

const reducer = (state = urlInitialState, action: AnyAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TABLE_PAGINATION_REQUEST:
        draft.tablePaginationLoading = true;
        draft.tablePaginationDone = false;
        draft.tablePaginationError = null;
        break;
      case TABLE_PAGINATION_SUCCESS: {
        draft.tablePaginationLoading = false;

        if (action.sender === "linkManage") {
          draft.urlInfo = action.data;
        } else if (action.sender === "linkStorage") {
          draft.storageUrlInfo = action.data;
        } else if (action.sender === "linkExpired") {
          draft.expiredUrlInfo = action.data;
        }

        draft.tablePaginationDone = true;
        draft.urlCutDone = false;
        draft.loadUserUrlsDone = false;
        draft.removeUrlsDone = false;
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

        draft.shortenUrl = action.data.shortenUrl;
        draft.urlInfo.pop(); // 배열 마지막 요소 제거하고
        draft.urlInfo.unshift(action.data); // 배열 맨 앞에 실제 데이터 추가

        draft.urlCutDone = true;
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
        draft.urlInfo = action.data;
        draft.urlInfoIds = action.urlInfoIds;
        draft.storageUrlInfoIds = action.storageUrlInfoIds;
        draft.expiredUrlInfoIds = action.expiredUrlInfoIds;

        draft.loadUserUrlsDone = true;
        draft.loadStorageUrlsDone = false;
        draft.loadExpiredUrlsDone = false;
        draft.searchUrlsDone = false;
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
        draft.storageUrlInfo = action.data;
        draft.urlInfoIds = action.urlInfoIds;
        draft.storageUrlInfoIds = action.storageUrlInfoIds;
        draft.expiredUrlInfoIds = action.expiredUrlInfoIds;

        draft.loadStorageUrlsDone = true;
        draft.loadExpiredUrlsDone = false;
        draft.loadUserUrlsDone = false;
        draft.searchUrlsDone = false;
        break;
      case LOAD_STORAGE_URLS_FAILURE:
        draft.loadStorageUrlsLoading = false;
        draft.loadStorageUrlsError = action.error;
        break;

      case LOAD_EXPIRED_URLS_REQUEST:
        draft.loadExpiredUrlsLoading = true;
        draft.loadExpiredUrlsDone = false;
        draft.loadExpiredUrlsError = null;
        break;
      case LOAD_EXPIRED_URLS_SUCCESS:
        draft.loadExpiredUrlsLoading = false;
        draft.expiredUrlInfo = action.data;
        draft.urlInfoIds = action.urlInfoIds;
        draft.storageUrlInfoIds = action.storageUrlInfoIds;
        draft.expiredUrlInfoIds = action.expiredUrlInfoIds;

        draft.loadExpiredUrlsDone = true;
        draft.loadUserUrlsDone = false;
        draft.loadStorageUrlsDone = false;
        draft.searchUrlsDone = false;
        break;
      case LOAD_EXPIRED_URLS_FAILURE:
        draft.loadExpiredUrlsLoading = false;
        draft.loadExpiredUrlsError = action.error;
        break;

      case REMOVE_URLS_REQUEST:
        draft.removeUrlsLoading = true;
        draft.removeUrlsDone = false;
        draft.removeUrlsError = null;
        break;
      case REMOVE_URLS_SUCCESS: {
        draft.removeUrlsLoading = false;

        // draft.urlInfo = draft.urlInfo.filter((v) => v.id !== action.data.id); // 1 개씩 지울 때
        if (action.data.sender === "linkManage") {
          console.log("linkManage");
          draft.urlInfo = draft.urlInfo.filter(
            (listItem) => !action.data.removeIds.includes(listItem.id)
          ); // 여러 개 지울 때
        } else if (action.data.sender === "linkStorage") {
          console.log("linkStorage");
          draft.storageUrlInfo = draft.storageUrlInfo.filter(
            (listItem) => !action.data.removeIds.includes(listItem.id)
          );
        } else if (action.data.sender === "linkExpired") {
          console.log("linkExpired");
          draft.expiredUrlInfo = draft.expiredUrlInfo.filter(
            (listItem) => !action.data.removeIds.includes(listItem.id)
          );
        } else if (action.data.sender === "search") {
          console.log("search");
          draft.searchUrlInfo = draft.searchUrlInfo.filter(
            (listItem) => !action.data.removeIds.includes(listItem.id)
          );
        }

        draft.removeUrlsDone = true;
        draft.urlCutDone = false;
        draft.loadUserUrlsDone = false;
        draft.moveMentUrlsDone = false;
        break;
      }
      case REMOVE_URLS_FAILURE:
        draft.removeUrlsLoading = false;
        draft.removeUrlsError = action.error;
        break;

      case MOVEMENT_URLS_REQUEST:
        draft.moveMentUrlsLoading = true;
        draft.moveMentUrlsDone = false;
        draft.moveMentUrlsError = null;
        break;
      case MOVEMENT_URLS_SUCCESS: {
        draft.moveMentUrlsLoading = false;

        if (action.data.sender === "linkManage") {
          draft.urlInfo = draft.urlInfo.filter(
            (listItem) => !action.data.moveMentIds.includes(listItem.id)
          ); // 여러 개 지울 때
        } else if (action.data.sender === "linkStorage") {
          draft.storageUrlInfo = draft.storageUrlInfo.filter(
            (listItem) => !action.data.moveMentIds.includes(listItem.id)
          );
        } else if (action.data.sender === "linkExpired") {
          draft.expiredUrlInfo = draft.expiredUrlInfo.filter(
            (listItem) => !action.data.moveMentIds.includes(listItem.id)
          );
        } else if (action.data.sender === "search") {
          draft.searchUrlInfo = draft.searchUrlInfo.filter(
            (listItem) => !action.data.moveMentIds.includes(listItem.id)
          );
        }

        draft.moveMentUrlsDone = true;
        draft.urlCutDone = false;
        draft.loadUserUrlsDone = false;
        draft.removeUrlsDone = false;
        break;
      }
      case MOVEMENT_URLS_FAILURE:
        draft.moveMentUrlsLoading = false;
        draft.moveMentUrlsError = action.error;
        break;

      case RESET_URLS_INFO_REQUEST:
        draft.resetUrlsInfoLoading = true;
        draft.resetUrlsInfoDone = false;
        draft.resetUrlsInfoError = null;
        break;
      case RESET_URLS_INFO_SUCCESS:
        draft.resetUrlsInfoLoading = false;
        draft.urlInfo = [];
        draft.storageUrlInfo = [];
        draft.expiredUrlInfo = [];
        if (draft.searchUrlsDone === false) {
          draft.searchUrlInfo = [];
        }
        draft.resetUrlsInfoDone = true;
        break;
      case RESET_URLS_INFO_FAILURE:
        draft.resetUrlsInfoLoading = false;
        draft.resetUrlsInfoError = action.error;
        break;

      case SEARCH_URLS_REQUEST:
        draft.searchUrlsLoading = true;
        draft.searchUrlsDone = false;
        draft.searchUrlsError = null;
        break;
      case SEARCH_URLS_SUCCESS:
        draft.searchUrlsLoading = false;
        draft.searchUrlInfo = action.data;
        draft.searchUrlsDone = true;
        break;
      case SEARCH_URLS_FAILURE:
        draft.searchUrlsLoading = false;
        draft.searchUrlsError = action.error;
        break;

      case RESET_SEARCH_URLS_REQUEST:
        draft.resetSearchUrlsLoading = true;
        draft.resetSearchUrlsDone = false;
        draft.resetSearchUrlsError = null;
        break;
      case RESET_SEARCH_URLS_SUCCESS:
        draft.resetSearchUrlsLoading = false;
        draft.searchUrlInfo = [];
        draft.resetSearchUrlsDone = true;

        draft.searchUrlsDone = false;
        break;
      case RESET_SEARCH_URLS_FAILURE:
        draft.resetSearchUrlsLoading = false;
        draft.resetSearchUrlsError = action.error;
        break;

      default:
        break;
    }
  });

export type UrlState = ReturnType<typeof reducer>;
export default reducer;

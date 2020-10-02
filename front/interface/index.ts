import { CHANGE_NICKNAME_REQUEST, LOG_IN_REQUEST, SIGN_UP_REQUEST } from "../actions/action_user";

import { MOVEMENT_URLS_REQUEST, REMOVE_URLS_REQUEST, TABLE_PAGINATION_REQUEST } from "../actions/action_url";

// reducer_user - me
// saga_user - loginAPI
export interface dummyUserTypes {
  id: number;
  email: string;
  nickname: string;
  service: {
    usedUrl: number;
    membership: string;
  };
  clickCount: {
    [key: number]: number;
  };
}

interface baseTypes {
  type?: typeof LOG_IN_REQUEST;
  data: {
    Email: string;
    Password: string;
    NickName?: string;
  };
}

// action_user - loginRequestAction
export interface logInType extends baseTypes {}
// saga_user - logIn
export interface logInSagaType extends baseTypes {
  type: typeof LOG_IN_REQUEST;
}

// action_user - signupRequestAction
export interface signUpType extends baseTypes {}
// saga_user - signUp
export interface signUpSagaType {
  type: typeof SIGN_UP_REQUEST;
}

export interface changeNicknameTypes {
  type: typeof CHANGE_NICKNAME_REQUEST;
  data: {
    nickname: string;
  }

}
// End User
/*----------------------------------*/

// a lot of
export interface TurlInfo {
  id: string;
  key: string;
  shortenUrl: string;
  originalUrl: string;
  urlTitle: string;
  linkOption: Array<string>;
  createdAt: Date | string | undefined;
  clickCount: number;
  urlPassword: string | null;
}
// reducer_url - urlInitialState
export type urlInitialStateTypes = {
  shortenUrl: string | null;
  urlInfo: TurlInfo[];
  urlInfoIds: Array<string>;
  storageUrlInfo: TurlInfo[];
  storageUrlInfoIds: Array<string>;
  expiredUrlInfo: TurlInfo[];
  expiredUrlInfoIds: Array<string>;

  searchUrlInfo: TurlInfo[];

  urlCutLoading: boolean;
  urlCutDone: boolean;
  urlCutError: string | null;

  loadUserUrlsLoading: boolean;
  loadUserUrlsDone: boolean;
  loadUserUrlsError: string | null;

  loadStorageUrlsLoading: boolean;
  loadStorageUrlsDone: boolean;
  loadStorageUrlsError: string | null;

  loadExpiredUrlsLoading: boolean;
  loadExpiredUrlsDone: boolean;
  loadExpiredUrlsError: string | null;

  removeUrlsLoading: boolean;
  removeUrlsDone: boolean;
  removeUrlsError: string | null;

  moveMentUrlsLoading: boolean;
  moveMentUrlsDone: boolean;
  moveMentUrlsError: string | null;

  tablePaginationLoading: boolean;
  tablePaginationDone: boolean;
  tablePaginationError: string | null;

  resetUrlsInfoLoading: boolean;
  resetUrlsInfoDone: boolean;
  resetUrlsInfoError: string | null;

  searchUrlsLoading: boolean;
  searchUrlsDone: boolean;
  searchUrlsError: string | null;

  resetSearchUrlsLoading: boolean;
  resetSearchUrlsDone: boolean;
  resetSearchUrlsError: string | null;
};

// sagas - dummyUrl
export interface tablePaginationTypes {
  sender?: string;
  page: number;
  limit: number;
  urlInfoIdsLength?: number;
}
// saga_url - tablePagination
export interface tablePaginationSagaTypes {
  type: typeof TABLE_PAGINATION_REQUEST;
  data: {
    sender?: string;
    page: number;
    limit: number;
    urlInfoIdsLength?: number;
  };
}

// hooks - useRemoveUrl, useMovementUrl
export interface tableRemoveAndMovementTypes {
  sender: string;
  moveMentIds?: string[];
  removeIds?: string[];
  searchUrlInfo?: TurlInfo[];
  searchUrlsDone?: boolean;
}
// saga_url - removeUrls
export interface tableRemoveSagaTypes {
  type: typeof REMOVE_URLS_REQUEST;
  data: {
    sender: string;
    moveMentIds?: string[];
    removeIds?: string[];
    searchUrlInfo?: TurlInfo[];
    searchUrlsDone?: boolean;
  }
}
// saga_url - moveMentUrls
export interface tableMovementSagaTypes {
  type: typeof MOVEMENT_URLS_REQUEST;
  data: {
    sender: string;
    moveMentIds?: string[];
    removeIds?: string[];
    searchUrlInfo?: TurlInfo[];
    searchUrlsDone?: boolean;
  }
}
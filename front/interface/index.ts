import {
  CHANGE_NICKNAME_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  LOG_IN_REQUEST,
  SIGN_UP_REQUEST,
} from "../actions/action_user";

import {
  MOVEMENT_URLS_REQUEST,
  REMOVE_URLS_REQUEST,
  TABLE_PAGINATION_REQUEST,
} from "../actions/action_url";

// reducer_user - me
// saga_user - loginAPI
export interface IdummyUser {
  id: number;
  email: string;
  password: string;
  nickname: string;
  publicProfile: boolean;
  mediaGateway: boolean;
  service: {
    usedUrl: number;
    membership: string;
  };
  clickCount: {
    [key: number]: number;
  };
}

export interface IuserInitialState {
  logInLoading: boolean;
  logInDone: boolean;
  logInError: string | null;

  logOutLoading: boolean;
  logOutDone: boolean;
  logOutError: string | null;

  signUpLoading: boolean;
  signUpDone: boolean;
  signUpError: string | null;

  changeNicknameLoading: boolean;
  changeNicknameDone: boolean;
  changeNicknameError: string | null;

  changePasswordLoading: boolean;
  changePasswordDone: boolean;
  changePasswordError: string | null;

  changePublicProfileLoading: boolean;
  changePublicProfileDone: boolean;
  changePublicProfileError: string | null;

  changeMediaGatewayLoading: boolean;
  changeMediaGatewayDone: boolean;
  changeMediaGatewayError: string | null;

  loadMyInfoLoading: boolean;
  loadMyInfoDone: boolean;
  loadMyInfoError: string | null;

  me: IdummyUser | null;
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
export interface IlogIn extends baseTypes {}
// saga_user - logIn
export interface IlogInSaga extends baseTypes {
  type: typeof LOG_IN_REQUEST;
}

// action_user - signupRequestAction
export interface IsignUp extends baseTypes {}
// saga_user - signUp
export interface IsignUpSaga {
  type: typeof SIGN_UP_REQUEST;
}

export interface IchangeNickname {
  type: typeof CHANGE_NICKNAME_REQUEST;
  data: {
    nickname: string;
  };
}

export interface IchangePassword {
  type: typeof CHANGE_PASSWORD_REQUEST;
  data: {
    password: string;
  };
}
// End User
/*----------------------------------*/

// a lot of
export interface IurlInfo {
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
export interface IurlInitialState {
  shortenUrl: string | null;
  urlInfo: IurlInfo[];
  urlInfoIds: Array<string>;
  storageUrlInfo: IurlInfo[];
  storageUrlInfoIds: Array<string>;
  expiredUrlInfo: IurlInfo[];
  expiredUrlInfoIds: Array<string>;

  searchUrlInfo: IurlInfo[];

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
}

// sagas - dummyUrl
export interface ItablePagination {
  sender?: string;
  page: number;
  limit: number;
  urlInfoIdsLength?: number;
}
// saga_url - tablePagination
export interface ItablePaginationSaga {
  type: typeof TABLE_PAGINATION_REQUEST;
  data: {
    sender?: string;
    page: number;
    limit: number;
    urlInfoIdsLength?: number;
  };
}

// hooks - useRemoveUrl, useMovementUrl
export interface ItableRemoveAndMovement {
  sender: string;
  moveMentIds?: string[];
  removeIds?: string[];
  searchUrlInfo?: IurlInfo[];
  searchUrlsDone?: boolean;
}
// saga_url - removeUrls
export interface ItableRemoveSaga {
  type: typeof REMOVE_URLS_REQUEST;
  data: {
    sender: string;
    moveMentIds?: string[];
    removeIds?: string[];
    searchUrlInfo?: IurlInfo[];
    searchUrlsDone?: boolean;
  };
}
// saga_url - moveMentUrls
export interface ItableMovementSaga {
  type: typeof MOVEMENT_URLS_REQUEST;
  data: {
    sender: string;
    moveMentIds?: string[];
    removeIds?: string[];
    searchUrlInfo?: IurlInfo[];
    searchUrlsDone?: boolean;
  };
}

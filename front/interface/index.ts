import { LOG_IN_REQUEST, SIGN_UP_REQUEST } from "../actions/action_user";

import { TABLE_PAGINATION_REQUEST } from "../actions/action_url";

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
// End User
/*----------------------------------*/

// LinkTable - Props, onRow
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
  urlInfoIds: Array<number>;
  storageUrlInfo: TurlInfo[];
  storageUrlInfoIds: Array<number>;
  expiredUrlInfo: TurlInfo[];
  expiredUrlInfoIds: Array<number>;

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

//
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

// LinkTable - forwardRef<>, useRef()
export interface RefType {
  selectedRowId?: TurlInfo;
  showDrawer?(): object;
}

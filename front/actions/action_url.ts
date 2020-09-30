export const URL_CUT_REQUEST = "URL_CUT_REQUEST" as const; // URL 단축했을 때
export const URL_CUT_SUCCESS = "URL_CUT_SUCCESS" as const;
export const URL_CUT_FAILURE = "URL_CUT_FAILURE" as const;

export const LOAD_USER_URLS_REQUEST = "LOAD_USER_URLS_REQUEST" as const; // 전체 링크관리 로드 했을 때
export const LOAD_USER_URLS_SUCCESS = "LOAD_USER_URLS_SUCCESS" as const;
export const LOAD_USER_URLS_FAILURE = "LOAD_USER_URLS_FAILURE" as const;

export const LOAD_STORAGE_URLS_REQUEST = "LOAD_STORAGE_URLS_REQUEST" as const; // 링크 보관함 로드했을 때
export const LOAD_STORAGE_URLS_SUCCESS = "LOAD_STORAGE_URLS_SUCCESS" as const;
export const LOAD_STORAGE_URLS_FAILURE = "LOAD_STORAGE_URLS_FAILURE" as const;

export const LOAD_EXPIRED_URLS_REQUEST = "LOAD_EXPIRED_URLS_REQUEST" as const; // 설정기간 만료 로드했을 때
export const LOAD_EXPIRED_URLS_SUCCESS = "LOAD_EXPIRED_URLS_SUCCESS" as const;
export const LOAD_EXPIRED_URLS_FAILURE = "LOAD_EXPIRED_URLS_FAILURE" as const;

export const REMOVE_URLS_REQUEST = "REMOVE_URLS_REQUEST" as const; // 선택된 URL 삭제했을 때
export const REMOVE_URLS_SUCCESS = "REMOVE_URLS_SUCCESS" as const;
export const REMOVE_URLS_FAILURE = "REMOVE_URLS_FAILURE" as const;

export const MOVEMENT_URLS_REQUEST = "MOVEMENT_URLS_REQUEST" as const; // 선택된 URL 보관함 이동, 해제했을 때
export const MOVEMENT_URLS_SUCCESS = "MOVEMENT_URLS_SUCCESS" as const;
export const MOVEMENT_URLS_FAILURE = "MOVEMENT_URLS_FAILURE" as const;

export const TABLE_PAGINATION_REQUEST = "TABLE_PAGINATION_REQUEST" as const; // 테이블 페이지네이션했을 때
export const TABLE_PAGINATION_SUCCESS = "TABLE_PAGINATION_SUCCESS" as const;
export const TABLE_PAGINATION_FAILURE = "TABLE_PAGINATION_FAILURE" as const;

export const RESET_URLS_INFO_REQUEST = "RESET_URLS_INFO_REQUEST" as const; // 페이지 이동 시 url들 info 초기화 하고 현재 페이지 urlInfo만 리로드하여 성능 개선
export const RESET_URLS_INFO_SUCCESS = "RESET_URLS_INFO_SUCCESS" as const;
export const RESET_URLS_INFO_FAILURE = "RESET_URLS_INFO_FAILURE" as const;

export const SEARCH_URLS_REQUEST = "SEARCH_URLS_REQUEST" as const; // seach 했을 때
export const SEARCH_URLS_SUCCESS = "SEARCH_URLS_SUCCESS" as const;
export const SEARCH_URLS_FAILURE = "SEARCH_URLS_FAILURE" as const;

export const RESET_SEARCH_URLS_REQUEST = "RESET_SEARCH_URLS_REQUEST" as const; // 검색 지우기 버튼 눌렀을 때
export const RESET_SEARCH_URLS_SUCCESS = "RESET_SEARCH_URLS_SUCCESS" as const;
export const RESET_SEARCH_URLS_FAILURE = "RESET_SEARCH_URLS_FAILURE" as const;

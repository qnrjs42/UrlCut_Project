import { IlogIn, IsignUp } from "../interface";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST" as const;
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS" as const;
export const LOG_IN_FAILURE = "LOG_IN_FAILURE" as const;

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST" as const;
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS" as const;
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE" as const;

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST" as const;
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS" as const;
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE" as const;

export const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST" as const;
export const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS" as const;
export const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE" as const;

export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST" as const;
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS" as const;
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE" as const;

export const CHANGE_PUBLIC_PROFILE_REQUEST = "CHANGE_PUBLIC_PROFILE_REQUEST" as const;
export const CHANGE_PUBLIC_PROFILE_SUCCESS = "CHANGE_PUBLIC_PROFILE_SUCCESS" as const;
export const CHANGE_PUBLIC_PROFILE_FAILURE = "CHANGE_PUBLIC_PROFILE_FAILURE" as const;

export const CHANGE_MEDIA_GATEWAY_REQUEST = "CHANGE_MEDIA_GATEWAY_REQUEST" as const;
export const CHANGE_MEDIA_GATEWAY_SUCCESS = "CHANGE_MEDIA_GATEWAY_SUCCESS" as const;
export const CHANGE_MEDIA_GATEWAY_FAILURE = "CHANGE_MEDIA_GATEWAY_FAILURE" as const;

export const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST" as const;
export const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS" as const;
export const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE" as const;

export const ADD_POST_TO_ME = "ADD_POST_TO_ME" as const;
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME" as const;

export const loginRequestAction = (data: IlogIn) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const signupRequestAction = (data: IsignUp) => ({
  type: SIGN_UP_REQUEST,
  data,
});

export const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST,
});

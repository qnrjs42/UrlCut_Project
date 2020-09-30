import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";

import url, { IUrlReducerState } from "./reducer_url";
import user, { IUserReducerState } from "./reducer_user";

export type State = {
  url: IUrlReducerState;
  user: IUserReducerState;
};

const rootReducer = (state: State, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        url,
        user,
      });
      return combineReducer(state, action);
    }
  }
};
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

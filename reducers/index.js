import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

const initialState = {
    url: null
}

const URL_CUT = 'URL_CUT';

const url_msg = "Redux를 이용한 단축된 URL";

export const urlCutAction = () => {
    return {
        type: URL_CUT,
    }
}

const rootReducer = combineReducers({
  index: (state = initialState, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRYTE", HYDRATE);
        return { ...state, ...action.payload };

      case URL_CUT:
          console.log(`state : ${state}, action: : ${action}`)
        return {
          ...state,
          url: url_msg,
        };

      default:
        return state;
    }
  },
});

export default rootReducer;

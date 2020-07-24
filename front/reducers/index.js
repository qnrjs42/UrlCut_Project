import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import url from './reducer_url';
import user from './reducer_user';

// const rootReducer = combineReducers({
//   index: (state = {}, action) => {
//     switch (action.type) {
//       case HYDRATE:
//         return { ...state, ...action.payload };
//       default:
//         return state;
//     }
//   },
//   url,
//   user,
// });

const rootReducer = (state, action) => {
  switch(action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        url,
        user,
      });
      return combineReducer(state, action);
    }
  }
}

export default rootReducer;

import { combineReducers } from "redux";

import { countersListReducer } from "pages/ReduxCountersList/reducers";

export const rootReducer = () => {
   return combineReducers({
      reduxCountersList: countersListReducer,
   });
};
import { combineReducers } from "redux";

import { countersListReducer } from "pages/ReduxCountersList/reducers";
import { todosReducer } from "pages/TodoList/reducers";

export const rootReducer = () => {
   return combineReducers({
      reduxCountersList: countersListReducer,
      todoListPage: todosReducer,
   });
};
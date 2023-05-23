import { configureStore } from "@reduxjs/toolkit";

import reduxCountersListReducer from "pages/ReduxCountersList/reducers";
import todoListReducer from "pages/TodoList/reducers";

export const store = configureStore({
   reducer: {
      reduxCountersList: reduxCountersListReducer,
      todoList: todoListReducer,
   },
   middleware: [],
})
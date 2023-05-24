import { configureStore } from "@reduxjs/toolkit";

import reduxCountersListReducer from "pages/ReduxCountersList/reducers";
import todoListReducer from "pages/TodoList/reducers";
import pokemonsReducer from "pages/Pokemons/reducers";

export const store = configureStore({
   reducer: {
      reduxCountersList: reduxCountersListReducer,
      todoList: todoListReducer,
      pokemons: pokemonsReducer,
   },
})
import { configureStore } from "@reduxjs/toolkit";

import reduxCountersListReducer from "pages/ReduxCountersList/reducers";
import todoListReducer from "pages/TodoList/reducers";
import pokemonsReducer from "pages/Pokemons/reducers";
import pokemonInfoReducer from "pages/PokemonInfo/reducers";
import signInReducer from "pages/SignIn/reducers";

export const store = configureStore({
   reducer: {
      auth: signInReducer,
      reduxCountersList: reduxCountersListReducer,
      todoList: todoListReducer,
      pokemons: pokemonsReducer,
      pokemonInfo: pokemonInfoReducer,
   },
})
import { createReducer } from "@reduxjs/toolkit";

import * as actions from "../actions";

const initialState = {
   data: [],
   isLoading: false,
   errors: null,
};

export const pokemonsReducer = createReducer(initialState, (builder) => {
   builder.addCase(actions.getPokemonsRequest, (state, action) => {
      state.isLoading = true;

      return state;
   });
   builder.addCase(actions.getPokemonsSuccess, (state, { payload }) => {
      state.data = payload;

      state.isLoading = false;

      return state;
   });
   builder.addCase(actions.getPokemonsFail, (state, { payload }) => {
      state.errors = payload;

      state.isLoading = false;

      return state;
   });
});
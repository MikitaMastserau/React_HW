import { createAction, createSlice } from "@reduxjs/toolkit";

import { getPokemonsThunk } from "../api";

const initialState = {
   data: [],
   pokemonDetails: {},
   isLoading: false,
   errors: null,
   value: 0,
};

export const dataFetchingSlice = createSlice({
   name: "dataFetching",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getPokemonsThunk.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(getPokemonsThunk.fulfilled, (state, { payload }) => {
         state.isLoading = false;
         state.data = payload.results;
      });
      builder.addCase(getPokemonsThunk.fulfilled, (state, { error }) => {
         state.isLoading = false;
         state.errors = error;
      });
   },
});
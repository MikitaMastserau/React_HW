import { createSlice } from "@reduxjs/toolkit";

import { getPokemonInfoThunk } from "../api";

const initialState = {
   data: {},
   isLoading: false,
   errors: null,
};

const pokemonInfoSlice = createSlice({
   name: "pokemonInfo",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getPokemonInfoThunk.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getPokemonInfoThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
         })
         .addCase(getPokemonInfoThunk.rejected, (state, { error }) => {
            state.isLoading = false;
            state.errors = error.message;
         })
   },
});

export default pokemonInfoSlice.reducer;
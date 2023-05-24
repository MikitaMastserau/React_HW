import { createSlice } from "@reduxjs/toolkit";

import { getPokemonsThunk } from "../api";

const initialState = {
   data: [],
   isLoading: false,
   errors: null,
};

const pokemonsSlice = createSlice({
   name: "pokemons",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getPokemonsThunk.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getPokemonsThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
         })
         .addCase(getPokemonsThunk.rejected, (state, { error }) => {
            state.isLoading = false;
            state.errors = error;
         })
   },
});

export default pokemonsSlice.reducer;
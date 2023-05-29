import { createSlice } from "@reduxjs/toolkit";

import { signInThunk } from "../api";

const initialState = {
   profileData: {},
   isLoading: false,
   errors: null,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(signInThunk.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(signInThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.profileData = payload;
         })
         .addCase(signInThunk.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.errors = payload;
         })
   },
});

export default authSlice.reducer;
import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.auth;

export const isSignInLoadingSelector = createSelector(baseSelector, (auth) => auth.isLoading);
export const signInErrorsSelector = createSelector(baseSelector, (auth) => auth.errors);
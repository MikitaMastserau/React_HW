import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.pokemonInfo;

export const pokemonInfoSelector = createSelector(baseSelector, (info) => info.data);
export const isPokemonInfoLoadingSelector = createSelector(baseSelector, (info) => info.isLoading);
export const pokemonInfoErrorsSelector = createSelector(baseSelector, (info) => info.errors);
import { createAction } from "@reduxjs/toolkit";
import { getPokemons } from "../api";

export const getPokemonsRequest = createAction("pokemons/getPokemonsRequest");
export const getPokemonsSuccess = createAction("pokemons/getPokemonsSuccess");
export const getPokemonsFail = createAction("pokemons/getPokemonsFail");

export const getPokemonsThunk = () => {
   return async (dispatch) => {
      dispatch(getPokemonsRequest());
      try {
         const data = await getPokemons();

         dispatch(getPokemonsSuccess(data));
      } catch (error) {
         dispatch(getPokemonsFail(error.message));
      }
   };
};
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemonsRequest = () => fetch(BASE_URL).then((response) => response.json());

export const getPokemonsThunk = createAsyncThunk("pokemons/getPokemons", getPokemonsRequest
   // async () => {
   //    const response = await getPokemonsRequest();

   //    return response.results;
   // }
   // тоже самое что вторым аргументом просто ссылку на реквест, но если нужно усложнить логику то лучше асинк колбэк.
);
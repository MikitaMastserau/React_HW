import { createAsyncThunk } from "@reduxjs/toolkit";

import { pokemonApiConfig } from "config/pokemonApi";

// const getPokemonsRequest = () => fetch(BASE_URL).then((response) => response.json());
const getPokemonsRequest = () => pokemonApiConfig.get("/pokemon"); // запрос с помощью аксиоса

const getPokemonsDetailsRequest = (pokemonName) => pokemonApiConfig.get(`/pokemon/${pokemonName}`);

export const getPokemonsThunk = createAsyncThunk("pokemons/getPokemons",
   async () => {
      const response = await getPokemonsRequest();

      const pokemonsDetails = response.data.results.map(({ name }) => getPokemonsDetailsRequest(name));

      const detailsResponse = await Promise.all(pokemonsDetails);

      return detailsResponse.map((response) => {
         const { name, id, sprites } = response.data;

         return {
            name,
            id,
            pokemonIcon: sprites.front_default,
         };
      });
   }
);
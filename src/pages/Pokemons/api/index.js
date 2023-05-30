import { createAsyncThunk } from "@reduxjs/toolkit";

import { mainApiConfig } from "config/mainApi";

const getPokemonsRequest = () => mainApiConfig.get("/products");

export const getPokemonsThunk = createAsyncThunk("pokemons/getPokemons",
   async (_, { rejectWithValue }) => {
      try {
         const response = await getPokemonsRequest();

         return response.data;
      } catch (error) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
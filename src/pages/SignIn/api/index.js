import { createAsyncThunk } from "@reduxjs/toolkit";

import { mainApiConfig } from "config/mainApi";

export const signInRequest = (body) => mainApiConfig.post("/auth/signIn", body);

export const signInThunk = createAsyncThunk("auth/signIn",
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await signInRequest(payload);

         const { accessToken, ...profileData } = data;

         console.log(profileData);

         return profileData;
      } catch (error) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
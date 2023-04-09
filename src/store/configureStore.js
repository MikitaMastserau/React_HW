// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//import dataFetchingReducer from "./dataFetchingReducer";
import { rootReducer } from "./rootReducer";

export const configureStore = () => {
   const store = createStore(rootReducer(), composeWithDevTools());

   return store;
};

// export const store = configureStore({
//    reducer: {
//       dataFetching: dataFetchingReducer,
//    },
// })
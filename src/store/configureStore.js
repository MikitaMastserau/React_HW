import { configureStore } from "@reduxjs/toolkit";

import reduxCountersListSlice from "pages/ReduxCountersList/reducers";

export const store = configureStore({
   reducer: {
      reduxCountersList: reduxCountersListSlice,
   },
})
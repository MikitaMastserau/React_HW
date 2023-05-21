import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
   countersList: [],
};

const reduxCountersListSlice = createSlice({
   name: "reduxCountersList",
   initialState,
   reducers: {
      addCounter: (state) => {
         const newCounter = {
            id: uuid(),
            counterValue: 0,
         };

         state.countersList.push(newCounter);
      },
      resetAllCounters: (state) => {
         state.countersList = [];
      },
      decrementCounter: (state, { payload: counterId }) => {
         const foundCounter = state.countersList.find((counter) => counter.id === counterId);

         if (foundCounter.counterValue > 0) {
            foundCounter.counterValue -= 1;
         }
      },
      resetCounter: (state, { payload: counterId }) => {
         const foundCounter = state.countersList.find((counter) => counter.id === counterId);

         foundCounter.counterValue = 0;
      },
      incrementCounter: (state, { payload: counterId }) => {
         const foundCounter = state.countersList.find((counter) => counter.id === counterId);

         foundCounter.counterValue += 1;
      },
      removeCounter: (state, { payload: counterId }) => {
         const foundCounterIndex = state.countersList.findIndex(({ id }) => id === counterId);

         state.countersList.splice(foundCounterIndex, 1);
      },
   },
});

export const { addCounter, resetAllCounters, decrementCounter, resetCounter, incrementCounter, removeCounter } = reduxCountersListSlice.actions;

export default reduxCountersListSlice.reducer;
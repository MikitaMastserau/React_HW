import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const initialState = {
   counters: {},
};

export const countersListReducer = handleActions({
   [actions.addCounter]: (state) => {
      const newCounter = {
         id: uuid(),
         counterValue: 0,
      };

      const stateCopy = structuredClone(state);

      stateCopy.counters[newCounter.id] = newCounter;

      return stateCopy;
   },
   [actions.resetAllCounters]: (state) => {
      return initialState;
   },
   [actions.removeCounter]: (state, { payload: counterId }) => {
      const stateCopy = structuredClone(state);

      const entries = Object.entries(stateCopy.counters);
      const counterIndexToRemove = entries.findIndex(({ id }) => id === counterId);
      entries.splice(counterIndexToRemove, 1);

      stateCopy.counters = Object.fromEntries(entries);

      return stateCopy;
   },
   [actions.decrementCounter]: (state, { payload: counterId }) => {
      const stateCopy = structuredClone(state);

      stateCopy.counters[counterId].counterValue -= 1;

      return stateCopy;
   },
   [actions.resetCounter]: (state, { payload: counterId }) => {
      const stateCopy = structuredClone(state);

      stateCopy.counters[counterId].counterValue = 0;

      return stateCopy;
   },
   [actions.incrementCounter]: (state, { payload: counterId }) => {
      const stateCopy = structuredClone(state);

      stateCopy.counters[counterId].counterValue += 1;

      return stateCopy;
   },
}, initialState);
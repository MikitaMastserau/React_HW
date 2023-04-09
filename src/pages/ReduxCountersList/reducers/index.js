import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const initialState = {
   counters: [],
};

export const countersListReducer = handleActions({
   [actions.addCounter]: (state) => {
      const newCounter = {
         id: uuid(),
         counterValue: 0,
      };

      const stateCopy = structuredClone(state);

      stateCopy.counters.push(newCounter);

      return stateCopy;
   },
   [actions.resetAllCounters]: (state) => {
      return initialState;
   },
   [actions.removeCounter]: (state, { payload: counterId }) => {
      const stateCopy = structuredClone(state);

      const counterIndexToRemove = stateCopy.counters.findIndex(({ id }) => id === counterId);

      stateCopy.counters.splice(counterIndexToRemove, 1);

      return stateCopy;
   },
   [actions.decrementCounter]: (state, { payload: counterId }) => {
      const stateCopy = structuredClone(state);
      const foundCounter = stateCopy.counters.find(({ id }) => id === counterId);

      if (foundCounter.counterValue > 0) {
         foundCounter.counterValue -= 1;
      };

      return stateCopy;
   },
   [actions.resetCounter]: (state, { payload: counterId }) => {
      const stateCopy = structuredClone(state);

      const foundCounter = stateCopy.counters.find(({ id }) => id === counterId);

      foundCounter.counterValue = 0;

      return stateCopy;
   },
   [actions.incrementCounter]: (state, { payload: counterId }) => {
      const stateCopy = structuredClone(state);

      const foundCounter = stateCopy.counters.find(({ id }) => id === counterId);

      foundCounter.counterValue += 1;

      return stateCopy;
   },
}, initialState);
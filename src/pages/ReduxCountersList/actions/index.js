// const ADD_COUNTER = "ADD_COUNTER";

// const addCounter = (payload) => {
//    return {
//       type: "CREATE_COUNTER",
//       payload,
//    };
// };

import { createAction } from "redux-actions";

export const addCounter = createAction("ADD_COUNTER");
export const resetAllCounters = createAction("RESET_ALL_COUNTERS");
export const decrementCounter = createAction("DECREMENT_COUNTER");
export const resetCounter = createAction("RESET_COUNTER");
export const incrementCounter = createAction("INCREMENT_COUNTER");
export const removeCounter = createAction("REMOVE_COUNTER");
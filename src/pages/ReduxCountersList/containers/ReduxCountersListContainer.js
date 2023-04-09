import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { addCounter, resetAllCounters, removeCounter, decrementCounter, resetCounter, incrementCounter } from "../actions";
import { countersSelector } from "../selectors";
import { ReduxCountersListLayout } from "../components/ReduxCountersListLayout";

export const ReduxCountersListContainer = () => {
   const dispatch = useDispatch();

   const counters = useSelector(countersSelector);

   const handleAddCounter = () => dispatch(addCounter());

   const handleResetAllCounters = () => dispatch(resetAllCounters());

   const handleRemoveCounter = useCallback((counterId) => dispatch(removeCounter(counterId)), [dispatch]);

   const handleDecrementCounter = useCallback((counterId) => dispatch(decrementCounter(counterId)), [dispatch]);

   const handleResetCounter = useCallback((counterId) => dispatch(resetCounter(counterId)), [dispatch]);

   const handleIncrementCounter = useCallback((counterId) => dispatch(incrementCounter(counterId)), [dispatch]);

   return <ReduxCountersListLayout
      counters={counters}
      handleAddCounter={handleAddCounter}
      handleResetAllCounters={handleResetAllCounters}
      handleRemoveCounter={handleRemoveCounter}
      handleDecrementCounter={handleDecrementCounter}
      handleResetCounter={handleResetCounter}
      handleIncrementCounter={handleIncrementCounter}
   />;
};
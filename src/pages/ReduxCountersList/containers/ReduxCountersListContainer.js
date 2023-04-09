import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { addCounter, resetAllCounters, removeCounter, decrementCounter, resetCounter, incrementCounter } from "../actions";
import { countersSelector, countersAmountSelector, totalSumSelector, averageValueSelector } from "../selectors";
import { ReduxCountersListLayout } from "../components/ReduxCountersListLayout";

export const ReduxCountersListContainer = () => {
   const dispatch = useDispatch();

   const counters = useSelector(countersSelector);
   const countersAmount = useSelector(countersAmountSelector);
   const totalSum = useSelector(totalSumSelector);
   const averageValue = useSelector(averageValueSelector);

   const handleAddCounter = () => dispatch(addCounter());

   const handleResetAllCounters = () => dispatch(resetAllCounters());

   const handleRemoveCounter = useCallback((counterId) => dispatch(removeCounter(counterId)), [dispatch]);

   const handleDecrementCounter = useCallback((counterId) => counters[counterId].counterValue > 0 && dispatch(decrementCounter(counterId)), [dispatch, counters]);

   const handleResetCounter = useCallback((counterId) => counters[counterId].counterValue > 0 && dispatch(resetCounter(counterId)), [dispatch, counters]);

   const handleIncrementCounter = useCallback((counterId) => dispatch(incrementCounter(counterId)), [dispatch]);

   return <ReduxCountersListLayout
      counters={counters}
      handleAddCounter={handleAddCounter}
      handleResetAllCounters={handleResetAllCounters}
      handleRemoveCounter={handleRemoveCounter}
      handleDecrementCounter={handleDecrementCounter}
      handleResetCounter={handleResetCounter}
      handleIncrementCounter={handleIncrementCounter}
      totalSum={totalSum}
      countersAmount={countersAmount}
      averageValue={averageValue}
   />;
};
import { useDispatch, useSelector } from "react-redux";
import { ReduxCountersListLayout } from "../components/ReduxCountersListLayout";
import { addCounter, decrementCounter, incrementCounter, removeCounter, resetAllCounters, resetCounter } from "../reducers";
import { countersListSelector } from "../selectors";

export const ReduxCountersListContainer = () => {
   const dispatch = useDispatch();

   const counters = useSelector(countersListSelector);

   const handleAddCounter = () => dispatch(addCounter());

   const handleResetAllCounters = () => dispatch(resetAllCounters());

   const handleRemoveCounter = (counterId) => { dispatch(removeCounter(counterId)) };

   const handleDecrementCounter = (counterId) => { dispatch(decrementCounter(counterId)) };

   const handleResetCounter = (counterId) => { dispatch(resetCounter(counterId)) };

   const handleIncrementCounter = (counterId) => { dispatch(incrementCounter(counterId)) };

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
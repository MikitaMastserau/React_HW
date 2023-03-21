import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

import { CountersListLayout } from "../CountersListLayout";
import { isEven } from "utils";

export const CountersListContainer = () => {
   const [counters, setCounters] = useState([]);

   const handleAddCounter = () => {
      const newCounter = {
         id: uuid(),
         counterValue: 0,
      };

      setCounters((state) => {
         const updatedCounters = state.map((counter) => {
            return {
               ...counter,
               counterValue: isEven(counter.counterValue) ? counter.counterValue + 1 : counter.counterValue,
            };
         });

         updatedCounters.push(newCounter);

         return updatedCounters;
      });
   };

   const handleResetCounters = () => {
      setCounters([]);
   };

   const handleDecrement = useCallback((counterId) => {
      setCounters((state) => {
         const countersCopy = structuredClone(state);
         const foundCounter = countersCopy.find(({ id }) => id === counterId);

         if (foundCounter.counterValue > 0) {
            foundCounter.counterValue -= 1;
         };

         return countersCopy;
      });
   }, []);

   const handleReset = useCallback((counterId) => {
      setCounters((state) => {
         const countersCopy = structuredClone(state);
         const foundCounter = countersCopy.find(({ id }) => id === counterId);

         foundCounter.counterValue = 0;

         return countersCopy;
      });
   }, []);

   const handleIncrement = useCallback((counterId) => {
      setCounters((state) => {
         const countersCopy = structuredClone(state);
         const foundCounter = countersCopy.find(({ id }) => id === counterId);

         foundCounter.counterValue += 1;

         return countersCopy;
      });
   }, []);

   const handleRemove = useCallback((counterId) => {
      setCounters((state) => {
         const countersCopy = structuredClone(state);
         const counterIndexToRemove = countersCopy.findIndex(({ id }) => id === counterId);

         countersCopy.splice(counterIndexToRemove, 1);

         return countersCopy.map((counter) => {
            return {
               ...counter,
               counterValue: !isEven(counter.counterValue) ? counter.counterValue - 1 : counter.counterValue,
            };
         });
      });
   }, []);

   const totalSum = counters.reduce((result, { counterValue }) => counterValue + result, 0);
   const averageValue = counters.length > 0 ? (Math.round((totalSum / counters.length) * 10) / 10) : 0;

   return <CountersListLayout
      counters={counters}
      handleAddCounter={handleAddCounter}
      handleResetCounters={handleResetCounters}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      handleIncrement={handleIncrement}
      handleRemove={handleRemove}
      totalSum={totalSum}
      averageValue={averageValue}
   />;
};
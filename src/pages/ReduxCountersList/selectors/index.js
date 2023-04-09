import { createSelector } from "reselect";

export const countersSelector = (store) => store.reduxCountersList.counters;

export const countersAmountSelector = createSelector(
   countersSelector,
   (counters) => Object.keys(counters).length
);

export const totalSumSelector = createSelector(
   countersSelector,
   (counters) => {
      const countersValues = Object.values(counters);

      return countersValues.reduce((result, { counterValue }) => result + counterValue, 0);
   }
);

export const averageValueSelector = createSelector(
   totalSumSelector,
   countersAmountSelector,
   (totalSum, countersAmount) => countersAmount > 0 ? (Math.round((totalSum / countersAmount) * 10) / 10) : 0
);
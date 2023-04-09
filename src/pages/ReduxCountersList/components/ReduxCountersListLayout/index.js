import PropTypes from "prop-types";

import { Title } from "components/Title";
import CounterView from "components/CounterView";

import styles from "./styles.module.scss";

export const ReduxCountersListLayout = ({
   counters,
   handleAddCounter,
   handleResetAllCounters,
   handleRemoveCounter,
   handleDecrementCounter,
   handleResetCounter,
   handleIncrementCounter,
   totalSum,
   countersAmount,
   averageValue,
}) => {
   return (
      <>
         <Title title="Redux Counters List" />

         <div className={styles.controlButtons}>
            <button className={styles.controlButton} onClick={handleAddCounter}>Add Counter</button>
            <button className={styles.controlButton} onClick={handleResetAllCounters}>Reset</button>
            <div className={styles.stats}>
               <p>Counters Amount: <span>{countersAmount}</span></p>
               <p>Total Sum: <span>{totalSum}</span></p>
               <p>Average: <span>{averageValue}</span></p>
            </div>
         </div>

         <div className={styles.counters}>
            {Object.entries(counters).map(([id, counter]) => (
               <CounterView
                  id={id}
                  key={id}
                  counterValue={counter.counterValue}
                  handleRemove={handleRemoveCounter}
                  handleDecrement={handleDecrementCounter}
                  handleReset={handleResetCounter}
                  handleIncrement={handleIncrementCounter}
               />))}
         </div>
      </>
   );
};

ReduxCountersListLayout.propTypes = {
   counters: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.string,
      countValue: PropTypes.number,
   }).isRequired).isRequired,
   handleAddCounter: PropTypes.func.isRequired,
   handleResetAllCounters: PropTypes.func.isRequired,
   handleDecrementCounter: PropTypes.func.isRequired,
   handleResetCounter: PropTypes.func.isRequired,
   handleIncrementCounter: PropTypes.func.isRequired,
   handleRemoveCounter: PropTypes.func.isRequired,
   totalSum: PropTypes.number.isRequired,
   countersAmount: PropTypes.number.isRequired,
   averageValue: PropTypes.number.isRequired,
};
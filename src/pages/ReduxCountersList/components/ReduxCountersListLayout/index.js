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
}) => {
   return (
      <>
         <Title title="Redux Counters List" />

         <div className={styles.controlButtons}>
            <button className={styles.controlButton} onClick={handleAddCounter}>Add Counter</button>
            <button className={styles.controlButton} onClick={handleResetAllCounters}>Reset</button>
         </div>

         <div className={styles.counters}>
            {counters.map(({ id, counterValue }) => (
               <CounterView
                  id={id}
                  key={id}
                  counterValue={counterValue}
                  handleRemove={handleRemoveCounter}
                  handleDecrement={handleDecrementCounter}
                  handleReset={handleResetCounter}
                  handleIncrement={handleIncrementCounter}
               />))}
         </div>
      </>
   );
};
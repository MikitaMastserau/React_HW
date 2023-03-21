import PropTypes from "prop-types";

import { Title } from "components/Title";
import CounterView from "components/CounterView";

import styles from "./styles.module.scss";

export const CountersListLayout = ({
   counters,
   handleAddCounter,
   handleResetCounters,
   handleDecrement,
   handleReset,
   handleIncrement,
   handleRemove,
   totalSum,
   averageValue,
}) => {
   return (
      <>
         <Title title="Counters List" />

         <div className={styles.controlButtons}>
            <button className={styles.controlButton} onClick={handleAddCounter}>Add Counter</button>
            <button className={styles.controlButton} onClick={handleResetCounters}>Reset</button>
            <div className={styles.stats}>
               <p>Counters Amount: <span>{counters.length}</span></p>
               <p>Total Sum: <span>{totalSum}</span></p>
               <p>Average: <span>{averageValue}</span></p>
            </div>
         </div>

         <div className={styles.counters}>
            {counters.map(({ id, counterValue }) => (
               <CounterView
                  id={id}
                  key={id}
                  counterValue={counterValue}
                  handleDecrement={handleDecrement}
                  handleReset={handleReset}
                  handleIncrement={handleIncrement}
                  handleRemove={handleRemove} />))}
         </div>
      </>
   );
};

CountersListLayout.propTypes = {
   counters: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      countValue: PropTypes.number,
   }).isRequired).isRequired,
   handleAddCounter: PropTypes.func.isRequired,
   handleResetCounters: PropTypes.func.isRequired,
   handleDecrement: PropTypes.func.isRequired,
   handleReset: PropTypes.func.isRequired,
   handleIncrement: PropTypes.func.isRequired,
   handleRemove: PropTypes.func.isRequired,
};
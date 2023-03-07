import { Title } from "components/Title";
import { FuncCounterContainer } from "pages/FuncCounter/containers/FuncCounterContainer";

import styles from "./styles.module.scss";

export const CountersListLayout = ({ counters, handleAddCounter, handleReset }) => {
   return (
      <>
         <Title title="Counters List" />

         <div className={styles.controlButtons}>
            <button className={styles.controlButton} onClick={handleAddCounter}>Add Counter</button>
            <button className={styles.controlButton} onClick={handleReset}>Reset</button>
         </div>

         <div className={styles.counters}>
            {counters.map(({ counterValue, handleDecrement, handleReset, handleIncrement }, index) => (
               <div key={index}>
                  <FuncCounterContainer
                     counterValue={counterValue}
                     handleDecrement={handleDecrement}
                     handleReset={handleReset}
                     handleIncrement={handleIncrement} />
                  <button className={styles.controlButton}>Delete</button>
               </div>))}
         </div>
      </>
   );
};
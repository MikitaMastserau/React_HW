import { Title } from "components/Title";
import CounterView from "components/CounterView";

import styles from "./styles.module.scss";

export const FuncCounterLayout = ({ counterValue, handleDecrement, handleReset, handleIncrement }) => {
   return (
      <>
         <Title title="Functional Counter" />
         <div className={styles.wrapper}>
            <CounterView
               counterValue={counterValue}
               handleDecrement={handleDecrement}
               handleReset={handleReset}
               handleIncrement={handleIncrement} />
         </div>
      </>
   );
};
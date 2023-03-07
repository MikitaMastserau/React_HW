import { Title } from "components/Title";
import CounterView from "components/CounterView";

export const FuncCounterLayout = ({ counterValue, handleDecrement, handleReset, handleIncrement }) => {
   return (
      <>
         <Title title="Functional Counter" />
         <CounterView
            counterValue={counterValue}
            handleDecrement={handleDecrement}
            handleReset={handleReset}
            handleIncrement={handleIncrement} />
      </>
   );
};
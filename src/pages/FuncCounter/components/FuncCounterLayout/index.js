import { Title } from "components/Title";
import CounterView from "components/CounterView";

export const FuncCounterLayout = ({ counterValue, isEven, handleDecrement, handleReset, handleIncrement }) => {
   return (
      <>
         <Title title="Functional Counter" />
         <CounterView
            counterValue={counterValue}
            isEven={isEven}
            handleDecrement={handleDecrement}
            handleReset={handleReset}
            handleIncrement={handleIncrement} />
      </>
   );
};
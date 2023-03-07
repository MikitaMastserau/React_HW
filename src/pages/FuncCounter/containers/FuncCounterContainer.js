import { FuncCounterLayout } from "../components/FuncCounterLayout";
import { useCounter } from "hooks";

export const FuncCounterContainer = () => {
   const { countValue, handleDecrement, handleReset, handleIncrement } = useCounter(0);

   const isBlocked = countValue === 0;

   return (<FuncCounterLayout
      counterValue={countValue}
      handleDecrement={!isBlocked ? handleDecrement : () => { }}
      handleReset={handleReset}
      handleIncrement={handleIncrement} />);
};
import { CounterView } from "../CounterView";

export const CounterLayout = ({counterValue, handleDecrement, handleReset, handleIncrement}) => {
    return (
        <div>
           <CounterView
            counterValue={counterValue}
            handleDecrement={handleDecrement}
            handleReset={handleReset}
            handleIncrement={handleIncrement} /> 
        </div>
    );
};
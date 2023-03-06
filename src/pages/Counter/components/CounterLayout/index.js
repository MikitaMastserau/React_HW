import { Title } from "../../../../components/Title";
import CounterView from "../CounterView";

export const CounterLayout = ({ counterValue, isEven, handleDecrement, handleReset, handleIncrement }) => {
	return (
		<div>
			<Title title="Counter (Class Component)" />
			<CounterView
				counterValue={counterValue}
				isEven={isEven}
				handleDecrement={handleDecrement}
				handleReset={handleReset}
				handleIncrement={handleIncrement} />
		</div>
	);
};
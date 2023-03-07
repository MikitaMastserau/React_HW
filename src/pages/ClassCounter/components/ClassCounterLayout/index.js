import { Title } from "components/Title";
import CounterView from "components/CounterView";

export const ClassCounterLayout = ({ counterValue, isEven, handleDecrement, handleReset, handleIncrement }) => {
	return (
		<>
			<Title title="Class Counter" />
			<CounterView
				counterValue={counterValue}
				isEven={isEven}
				handleDecrement={handleDecrement}
				handleReset={handleReset}
				handleIncrement={handleIncrement} />
		</>
	);
};
import { CounterView } from "../CounterView";

import headingStyles from "../../../../components/HeadingStyles/styles.module.scss";

export const CounterLayout = ({ counterValue, handleDecrement, handleReset, handleIncrement }) => {
	return (
		<div>
			<h1 className={headingStyles.heading}>Counter (class component)</h1>
			<CounterView
				counterValue={counterValue}
				handleDecrement={handleDecrement}
				handleReset={handleReset}
				handleIncrement={handleIncrement} />
		</div>
	);
};
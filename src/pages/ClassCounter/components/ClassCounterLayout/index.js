import { Title } from "components/Title";
import CounterView from "components/CounterView";

import styles from "./styles.module.scss";

export const ClassCounterLayout = ({ counterValue, isEven, handleDecrement, handleReset, handleIncrement }) => {
	return (
		<>
			<Title title="Class Counter" />
			<div className={styles.wrapper}>
				<CounterView
					counterValue={counterValue}
					isEven={isEven}
					handleDecrement={handleDecrement}
					handleReset={handleReset}
					handleIncrement={handleIncrement} />
			</div>
		</>
	);
};
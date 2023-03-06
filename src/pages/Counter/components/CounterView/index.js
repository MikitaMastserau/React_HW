import PropTypes from "prop-types";
import { memo } from "react";

import styles from "./styles.module.scss";

const CounterView = ({ counterValue, isEven, handleDecrement, handleReset, handleIncrement }) => {
	return (
		<div className={styles.wrapper}>
			<div className={`${styles.display} ${isEven ? styles.evenColor : styles.oddColor}`}>
				{counterValue}
			</div>
			<div className={`${styles.display} ${isEven ? styles.evenColor : styles.oddColor}`}>
				{isEven ? "even" : "odd"}
			</div>
			<div className={styles.controlButtons}>
				<button className={styles.controlButton} onClick={handleDecrement}>-</button>
				<button className={styles.controlButton} onClick={handleReset}>Reset</button>
				<button className={styles.controlButton} onClick={handleIncrement}>+</button>
			</div>
		</div>
	);
};

CounterView.propTypes = {
	counterValue: PropTypes.number.isRequired,
	isEven: PropTypes.bool.isRequired,
	handleDecrement: PropTypes.func.isRequired,
	handleReset: PropTypes.func.isRequired,
	handleIncrement: PropTypes.func.isRequired,
};

export default memo(CounterView);
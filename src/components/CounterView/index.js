import PropTypes from "prop-types";
import { memo } from "react";

import styles from "./styles.module.scss";

const CounterView = ({
	id,
	counterValue,
	handleDecrement,
	handleReset,
	handleIncrement,
	handleRemove
}) => {
	const isEven = counterValue % 2 === 0;
	return (
		<div className={styles.wrapper}>
			<div className={`${styles.display} ${isEven ? styles.evenColor : styles.oddColor}`}>
				{counterValue}
			</div>
			<div className={`${styles.display} ${isEven ? styles.evenColor : styles.oddColor}`}>
				{isEven ? "even" : "odd"}
			</div>
			<div className={styles.controlButtons}>
				<button className={styles.controlButton} onClick={() => handleDecrement(id)}>-</button>
				<button className={styles.controlButton} onClick={() => handleReset(id)}>Reset</button>
				<button className={styles.controlButton} onClick={() => handleIncrement(id)}>+</button>
			</div>
			{handleRemove && <button className={styles.removeButton} onClick={() => handleRemove(id)}>Remove</button>}
		</div>
	);
};

CounterView.propTypes = {
	id: PropTypes.string,
	counterValue: PropTypes.number.isRequired,
	handleDecrement: PropTypes.func.isRequired,
	handleReset: PropTypes.func.isRequired,
	handleIncrement: PropTypes.func.isRequired,
	handleRemove: PropTypes.func,
};

export default memo(CounterView);
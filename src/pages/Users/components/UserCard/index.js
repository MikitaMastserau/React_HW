import PropTypes from "prop-types";

import styles from './styles.module.scss';

export const UserCard = ({ id, image, name, age }) => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.userId}>User #{id}</h1>
			<img className={styles.image} src={image} alt="user_photo" />
			<h2 className={styles.name}>Name: {name}</h2>
			<h2 className={styles.age}>Age: {age}</h2>
		</div>
	);
};

UserCard.propTypes = {
	id: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
};
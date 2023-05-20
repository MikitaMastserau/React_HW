import { Link } from 'react-router-dom';

import { ROUTE_NAMES } from "routes/routeNames"

import styles from './styles.module.scss';

export const Header = () => {
	return (
		<div className={styles.wrapper}>
			<Link className={styles.navLink} to={ROUTE_NAMES.HOME}>Home Page</Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.USERS}>Users</Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.CLASS_COUNTER}>Class Counter</Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.FUNC_COUNTER}>Functional Counter </Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.COND_RENDER}>Conditional Rendering</Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.COUNTERS_LIST}>Counters List</Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.REDUX_COUNTERS_LIST}>Redux Counters List</Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.FORM}>Form</Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.TODO_LIST}>Todo List</Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.DATA_FETCHING}>Data Fetching</Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.POKEMONS}>Pokemons</Link>
		</div>
	);
};
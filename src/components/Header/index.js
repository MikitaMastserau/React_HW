import { Link } from 'react-router-dom';

import { ROUTE_NAMES } from "routes/routeNames"

import styles from './styles.module.scss';

export const Header = () => {
	return (
		<div className={styles.wrapper}>
			<Link className={styles.navLink} to={ROUTE_NAMES.HOME}>Home Page</Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.USERS}>Users Page</Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.CLASS_COUNTER}>Class Counter Page</Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.FUNC_COUNTER}>Functional Counter Page</Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.COND_RENDER}>Conditional Rendering Page</Link>
			<Link className={styles.navLink} to={ROUTE_NAMES.COUNTERS_LIST}>Counters List Page</Link>
		</div>
	);
};
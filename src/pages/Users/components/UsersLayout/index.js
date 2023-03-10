import { Title } from "components/Title";
import { UserCard } from "../UserCard";

import kolya from "static/images/kolya.jpg";
import oleg from "static/images/oleg.jpg";
import anna from "static/images/anna.jpg";
import valera from "static/images/valera.jpg";

import styles from "./styles.module.scss";

export const UsersLayout = () => {
	return (
		<>
			<Title title="Users" />
			<div className={styles.wrapper}>
				<UserCard id={1} image={kolya} name="Kolya" age={25} />
				<UserCard id={2} image={oleg} name="Oleg" age={43} />
				<UserCard id={3} image={anna} name="Anna" age={21} />
				<UserCard id={4} image={valera} name="Valera" age={30} />
			</div>
		</>
	);
};
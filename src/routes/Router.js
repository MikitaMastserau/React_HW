import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

import { UsersContainer } from "../pages/Users/containers/UsersContainer";
import { CounterContainer } from "../pages/Counter/containers/CounterContainer";
import { CondRenderContainer } from "../pages/CondRender/containers/CondRenderContainer";

import headingStyles from "../components/HeadingStyles/styles.module.scss";

export const Router = () => {
	return (
		<Routes>
			<Route path={ROUTE_NAMES.HOME} element={<h1 className={headingStyles.heading}>HOME PAGE</h1>} />
			<Route path={ROUTE_NAMES.USERS} element={<UsersContainer />} />
			<Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
			<Route path={ROUTE_NAMES.COND_RENDER} element={<CondRenderContainer />} />
			<Route path="*" element={<h1 className={headingStyles.heading}>ERROR 404. NOT FOUND</h1>} />
		</Routes>
	);
};
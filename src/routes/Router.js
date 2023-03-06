import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

import { Title } from "../components/Title"
import { UsersContainer } from "../pages/Users/containers/UsersContainer";
import { CounterContainer } from "../pages/Counter/containers/CounterContainer";
import { CondRenderContainer } from "../pages/CondRender/containers/CondRenderContainer";

export const Router = () => {
	return (
		<Routes>
			<Route path={ROUTE_NAMES.HOME} element={<Title title="HOME PAGE" />} />
			<Route path={ROUTE_NAMES.USERS} element={<UsersContainer />} />
			<Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
			<Route path={ROUTE_NAMES.COND_RENDER} element={<CondRenderContainer />} />
			<Route path="*" element={<Title title="ERROR 404. NOT FOUND" />} />
		</Routes>
	);
};
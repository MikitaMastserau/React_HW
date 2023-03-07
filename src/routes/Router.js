import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

import { Title } from "../components/Title"
import { UsersContainer } from "../pages/Users/containers/UsersContainer";
import { ClassCounterContainer } from "../pages/ClassCounter/containers/ClassCounterContainer";
import { FuncCounterContainer } from "../pages/FuncCounter/containers/FuncCounterContainer";
import { CondRenderContainer } from "../pages/CondRender/containers/CondRenderContainer";
import { CountersListContainer } from "../pages/CountersList/containers/CountersListContainer";

export const Router = () => {
	return (
		<Routes>
			<Route path={ROUTE_NAMES.HOME} element={<Title title="HOME PAGE" />} />
			<Route path={ROUTE_NAMES.USERS} element={<UsersContainer />} />
			<Route path={ROUTE_NAMES.CLASS_COUNTER} element={<ClassCounterContainer />} />
			<Route path={ROUTE_NAMES.FUNC_COUNTER} element={<FuncCounterContainer />} />
			<Route path={ROUTE_NAMES.COND_RENDER} element={<CondRenderContainer />} />
			<Route path={ROUTE_NAMES.COUNTERS_LIST} element={<CountersListContainer />} />
			<Route path="*" element={<Title title="ERROR 404. NOT FOUND" />} />
		</Routes>
	);
};
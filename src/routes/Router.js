import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

import { Title } from "../components/Title"
import { UsersContainer } from "../pages/Users/containers/UsersContainer";
import { ClassCounterContainer } from "../pages/ClassCounter/containers/ClassCounterContainer";
import { FuncCounterContainer } from "../pages/FuncCounter/containers/FuncCounterContainer";
import { CondRenderContainer } from "../pages/CondRender/containers/CondRenderContainer";
import { CountersListContainer } from "../pages/CountersList/containers/CountersListContainer";
import { FormContainer } from "../pages/Form/containers/FormContainer";
import { DataFetchingContainer } from "../pages/DataFetching/containers/DataFetchingContainer";
import { ReduxCountersListContainer } from "pages/ReduxCountersList/containers/ReduxCountersListContainer";

export const Router = () => {
	return (
		<Routes>
			<Route path={ROUTE_NAMES.HOME} element={<Title title="HOME PAGE" />} />
			<Route path={ROUTE_NAMES.USERS} element={<UsersContainer />} />
			<Route path={ROUTE_NAMES.CLASS_COUNTER} element={<ClassCounterContainer />} />
			<Route path={ROUTE_NAMES.FUNC_COUNTER} element={<FuncCounterContainer />} />
			<Route path={ROUTE_NAMES.COND_RENDER} element={<CondRenderContainer />} />
			<Route path={ROUTE_NAMES.COUNTERS_LIST} element={<CountersListContainer />} />
			<Route path={ROUTE_NAMES.REDUX_COUNTERS_LIST} element={<ReduxCountersListContainer />} />
			<Route path={ROUTE_NAMES.FORM} element={<FormContainer />} />
			<Route path={ROUTE_NAMES.POKEMONS} element={<DataFetchingContainer />} />
			<Route path="*" element={<Title title="ERROR 404. NOT FOUND" />} />
		</Routes>
	);
};
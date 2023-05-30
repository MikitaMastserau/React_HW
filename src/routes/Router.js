import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

import { Title } from "components/Title"
import { UsersContainer } from "pages/Users/containers/UsersContainer";
import { ClassCounterContainer } from "pages/ClassCounter/containers/ClassCounterContainer";
import { FuncCounterContainer } from "pages/FuncCounter/containers/FuncCounterContainer";
import { CondRenderContainer } from "pages/CondRender/containers/CondRenderContainer";
import { CountersListContainer } from "pages/CountersList/containers/CountersListContainer";
import { FormContainer } from "pages/Form/containers/FormContainer";
import { DataFetchingContainer } from "pages/DataFetching/containers/DataFetchingContainer";
import { ReduxCountersListContainer } from "pages/ReduxCountersList/containers/ReduxCountersListContainer";
import { TodoListContainer } from "pages/TodoList/containers/TodoListContainer";
import { RenderPropsContainer } from "pages/RenderProps/containers/RenderPropsContainer";
import { PokemonsContainer } from "pages/Pokemons/containers/PokemonsContainer";
import { PokemonInfoContainer } from "pages/PokemonInfo/containers/PokemonInfoContainer";
import { SignUpContainer } from "pages/SignUp/containers/SignUpContainer";
import { SignInContainer } from "pages/SignIn/containers/SignInContainer";
import { PrivateRout } from "./PrivateRout";

export const Router = () => {
	return (
		<Routes>
			<Route path={ROUTE_NAMES.HOME} element={<Title title="HOME PAGE" />} />
			<Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
			<Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />

			<Route path={ROUTE_NAMES.USERS} element={
				<PrivateRout>
					<UsersContainer />
				</PrivateRout>
			} />
			<Route path={ROUTE_NAMES.CLASS_COUNTER} element={
				<PrivateRout>
					<ClassCounterContainer />
				</PrivateRout>
			} />
			<Route path={ROUTE_NAMES.FUNC_COUNTER} element={
				<PrivateRout>
					<FuncCounterContainer />
				</PrivateRout>
			} />
			<Route path={ROUTE_NAMES.COND_RENDER} element={
				<PrivateRout>
					<CondRenderContainer />
				</PrivateRout>
			} />
			<Route path={ROUTE_NAMES.COUNTERS_LIST} element={
				<PrivateRout>
					<CountersListContainer />
				</PrivateRout>
			} />
			<Route path={ROUTE_NAMES.REDUX_COUNTERS_LIST} element={
				<PrivateRout>
					<ReduxCountersListContainer />
				</PrivateRout>
			} />
			<Route path={ROUTE_NAMES.FORM} element={
				<PrivateRout>
					<FormContainer />
				</PrivateRout>
			} />
			<Route path={ROUTE_NAMES.TODO_LIST} element={
				<PrivateRout>
					<TodoListContainer />
				</PrivateRout>
			} />
			<Route path={ROUTE_NAMES.RENDER_PROPS} element={
				<PrivateRout>
					<RenderPropsContainer />
				</PrivateRout>
			} />
			<Route path={ROUTE_NAMES.DATA_FETCHING} element={
				<PrivateRout>
					<DataFetchingContainer />
				</PrivateRout>
			} />
			<Route path={ROUTE_NAMES.POKEMONS} element={
				<PrivateRout>
					<PokemonsContainer />
				</PrivateRout>
			} />
			<Route path={ROUTE_NAMES.POKEMON_INFO} element={
				<PrivateRout>
					<PokemonInfoContainer />
				</PrivateRout>
			} />
			<Route path="*" element={<Title title="ERROR 404. NOT FOUND" />} />
		</Routes>
	);
};
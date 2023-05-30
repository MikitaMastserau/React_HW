import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { MainLayout } from "./components/MainLayout/MainLayout";
import { Router } from "./routes/Router";
import { persistor, store } from "store/configureStore";

import "./index.css";
import { LoadingSpinner } from "components/LoadingSpinner";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate loading={<LoadingSpinner />} persistor={persistor}>
				<MainLayout>
					<Router />
				</MainLayout>
			</PersistGate>
		</Provider>
	</BrowserRouter>
);
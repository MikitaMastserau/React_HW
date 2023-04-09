import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { MainLayout } from './components/MainLayout/MainLayout';
import { Router } from './routes/Router';
import { configureStore } from 'store/configureStore';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<MainLayout>
				<Router />
			</MainLayout>
		</Provider>
	</BrowserRouter>
);
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { startMockServer } from './mocks/backend/server/index.ts';
import App from './app/App.tsx';
import './assets/scss/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';
import { Provider } from 'react-redux';
import { store } from './store/userStore.ts';

await startMockServer();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<AuthProvider>
					<App />
				</AuthProvider>
			</Provider>
		</BrowserRouter>
	</StrictMode>,
);

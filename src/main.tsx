import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { startMockServer } from './mocks/backend/server/index.ts';
import App from './app/App.tsx';
import './assets/scss/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';

await startMockServer();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<App />
			</AuthProvider>
		</BrowserRouter>
	</StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { startMockServer } from './mocks/backend/server/index.ts';
import App from './app/App.tsx';
import './assets/scss/index.scss';
import { BrowserRouter } from 'react-router-dom';

await startMockServer();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
);

import { setupWorker } from 'msw/browser';
import { meRoutes } from './routes/meRoutes';
import { fallbackRoutes } from './routes/fallbackRoutes';

const worker = setupWorker(...meRoutes, ...fallbackRoutes);

export const startMockServer = async () => {
    await worker.start();
    console.log('The mock server is running');
};

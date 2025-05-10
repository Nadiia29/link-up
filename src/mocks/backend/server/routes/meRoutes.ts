import { http } from 'msw';
import { createUser, getUser } from '../controllers/meController';

export const meRoutes = [http.post('/api/register', createUser), http.post('/api/login', getUser)];

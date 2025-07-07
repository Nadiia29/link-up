import { http } from 'msw';
import { isAuth } from '../isAuth';
import { createMe, getTokenByEmail, getMe, updateMe } from '../controllers/meController';

export const meRoutes = [
    http.post('/api/register', createMe),
    http.post('/api/login', getTokenByEmail),
    http.post('/api/me', isAuth(getMe)),
    http.post('/api/me/update', isAuth(updateMe)),
];

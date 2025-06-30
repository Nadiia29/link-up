import { getToken } from '../utils/auth';

export interface LoginPayload {
	email: string;
	pass: string;
}

export const getProfile = (): Promise<Response> => {
	const token = getToken();
	const headers = { 'Content-Type': 'application/json', uuid: token || '' };

	return fetch('/api/me', {
		headers,
		method: 'POST',
	});
};

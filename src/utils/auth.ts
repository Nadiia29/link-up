export const AUTH_KEY = 'isAuth';

export const setAuth = (value: string): void => {
	localStorage.setItem(AUTH_KEY, JSON.stringify({ uuid: value }));
};

export const checkAuth = (): boolean => {
	const token = localStorage.getItem(AUTH_KEY);

	if (!token) return false;

	const { uuid } = JSON.parse(token);

	return !!uuid;
};

export const getToken = (): string | null => {
	const token = localStorage.getItem(AUTH_KEY);

	if (!token) return null;

	const { uuid } = JSON.parse(token);

	return uuid;
};

export const removeAuth = (): void => {
	localStorage.removeItem(AUTH_KEY);
};

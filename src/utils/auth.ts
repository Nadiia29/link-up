export const AUTH_KEY = 'isAuth';

export const setAuth = (value: boolean): void => {
	localStorage.setItem(AUTH_KEY, JSON.stringify(value));
};

export const checkAuth = (): boolean => {
	const value = localStorage.getItem(AUTH_KEY);
	return value === 'true';
};

export const removeAuth = (): void => {
	localStorage.removeItem(AUTH_KEY);
};

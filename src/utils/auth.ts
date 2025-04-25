export const AUTH_KEY = 'isAuth';

export const setAuth = (value: boolean): void => {
	localStorage.setItem(AUTH_KEY, JSON.stringify(value));
};

export const getAuth = (): boolean => {
	const value = localStorage.getItem(AUTH_KEY);
	return value ? JSON.parse(value) : false;
};

export const AUTH_KEY = 'isAuth';

export const setAuth = (value: boolean): void => {
	localStorage.setItem(AUTH_KEY, JSON.stringify(value));
};

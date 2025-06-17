export interface LoginPayload {
	email: string;
	pass: string;
}

export const loginUser = (data: LoginPayload): Promise<Response> =>
	fetch('/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

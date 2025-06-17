export interface RegisterPayload {
	name: string;
	email: string;
	pass: string;
}

export const registerUser = (data: RegisterPayload): Promise<Response> =>
	fetch('/api/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

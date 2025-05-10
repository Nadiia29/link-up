import { http, passthrough, HttpResponse } from 'msw';

export const fallbackRoutes = [
    http.all('*', async ({ request }) => {
        const url = new URL(request.url);
        const isApiRequest = url.pathname.startsWith('/api/');

        if (!isApiRequest) {
            return passthrough();
        }

        return HttpResponse.json({ error: 'Unhandled API request' }, { status: 404 });
    }),
];

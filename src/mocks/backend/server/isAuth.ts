import { HttpResponse } from 'msw';
import { HandlerArgs } from './types';
import { getUserFromDb } from '../db';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isAuth = (cb: any) => {
    return async (args: HandlerArgs) => {
        const uuid = args.request.headers.get('uuid');

        if (!uuid) {
            return HttpResponse.json({ error: 'Missing UUID in headers' }, { status: 400 });
        }

        const user = await getUserFromDb('uuid', uuid);

        if (!user) {
            return HttpResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return cb(args);
    };
};

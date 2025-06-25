import { HttpResponse } from 'msw';
import { db, getUserFromDb } from '../../db';
import { HandlerArgs, User } from '../types';
import { UserModel } from '../models/UserModel';
import { checkEmail } from '../utils/checkEmail';

export const createMe = async ({ request }: HandlerArgs) => {
    const user: User = await request.json();

    if (!user) return HttpResponse.error();

    const { email, name, pass } = user;

    const isPassValid = pass.length > 5;

    if (!(email && checkEmail(email))) {
        return HttpResponse.json({ error: 'User email is not valid' }, { status: 400 });
    }

    if (!(pass && isPassValid)) {
        return HttpResponse.json(
            { error: 'Password should have more then 5 symbols' },
            { status: 400 },
        );
    }

    const isUserExists = await getUserFromDb('email', email);

    if (isUserExists) {
        return HttpResponse.json({ error: 'Email is already exists' }, { status: 400 });
    }

    const uuid = crypto.randomUUID();
    const userId = crypto.randomUUID();
    const userName = name || 'User';
    const userPass = btoa(user.pass);
    const userImage = '';
    const newUser: User = new UserModel(uuid, userId, userName, userPass, email, userImage);
    const userIdFromDb = await db.put('users', newUser);

    return HttpResponse.json({ userId: userIdFromDb }, { status: 201 });
};

export const getTokenByEmail = async ({ request }: HandlerArgs) => {
    const error = 'Incorrect login or password';
    const user: User = await request.json();
    const { email, pass } = user;

    if (!checkEmail(email)) {
        return HttpResponse.json({ error }, { status: 400 });
    }

    const userFromDb = await getUserFromDb('email', email);
    if (!userFromDb) {
        return HttpResponse.json({ error }, { status: 404 });
    }

    if (pass !== atob(userFromDb.pass)) {
        return HttpResponse.json({ error }, { status: 403 });
    }

    return HttpResponse.json({ token: userFromDb.uuid }, { status: 200 });
};

export const getMe = async ({ request }: HandlerArgs) => {
    const userUuid = request.headers.get('uuid') as string;

    if (!userUuid) return;

    const userFromDb = await getUserFromDb('uuid', userUuid);

    if (!userFromDb) return;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { uuid, pass, ...user } = userFromDb as User;

    return HttpResponse.json({ user }, { status: 200 });
};

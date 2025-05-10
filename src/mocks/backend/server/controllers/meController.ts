import { HttpResponse } from 'msw';
import { db } from '../../db';
import { HandlerArgs, User } from '../types';
import { UserModel } from '../models/UserModel';
import { checkEmail } from '../utils/checkEmail';

const getUserFromDbByEmail = async (email: string): Promise<User | null> => {
    const users = await db.getAll('users');
    const user = users.find(user => user.email === email);

    return user || null;
};

export const createUser = async ({ request }: HandlerArgs) => {
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

    const isUserExists = await getUserFromDbByEmail(email);

    if (isUserExists) {
        return HttpResponse.json({ error: 'Email is already exists' }, { status: 400 });
    }

    const userId = crypto.randomUUID();
    const userName = name || 'User';
    const userPass = btoa(user.pass);
    const userImage = '';
    const newUser: User = new UserModel(userId, userName, userPass, email, userImage);
    const userIdFromDb = await db.put('users', newUser);

    return HttpResponse.json({ userId: userIdFromDb }, { status: 201 });
};

export const getUser = async ({ request }: HandlerArgs) => {
    const error = 'Incorrect login or password';
    const user: User = await request.json();
    const { email, pass } = user;

    if (!user) return HttpResponse.error();

    if (!checkEmail(email)) {
        return HttpResponse.json({ error }, { status: 400 });
    }

    const userFromDb = await getUserFromDbByEmail(email);

    if (!userFromDb) {
        return HttpResponse.json({ error }, { status: 404 });
    }

    if (pass !== atob(userFromDb.pass)) {
        return HttpResponse.json({ error }, { status: 403 });
    }

    return HttpResponse.json({ userId: userFromDb.id }, { status: 200 });
};

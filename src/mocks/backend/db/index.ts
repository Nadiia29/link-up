import { openDB } from 'idb';

const DB_NAME = 'LinkUp';

enum Tables {
    USERS = 'users',
}

export const db = await openDB(DB_NAME, 1, {
    upgrade(database) {
        if (!database.objectStoreNames.contains(Tables.USERS)) {
            const table = database.createObjectStore(Tables.USERS, { keyPath: 'id' });
            table.createIndex('email', 'email', { unique: true });
            table.createIndex('uuid', 'uuid', { unique: true });
        }
    },
});

export const getUserFromDb = async (key: string, value: string) => {
    const users = await db.getAll('users');
    const user = users.find(user => user[key] === value);

    return user || null;
};

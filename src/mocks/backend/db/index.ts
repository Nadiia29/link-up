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

// const userById = await getUserFromDb('id', 'some-id-value');
// const userByUuid = await getUserFromDb('uuid', 'some-uuid-value');
// const userByEmail = await getUserFromDb('email', 'user@example.com');

export const getUserFromDb = async (key: 'email' | 'uuid' | 'id', value: string) => {
    if (key === 'id') {
        const user = await db.get(Tables.USERS, value);
        return user || null;
    }

    if (key === 'email' || key === 'uuid') {
        const user = await db.getFromIndex(Tables.USERS, key, value);
        return user || null;
    }

    return null;
};

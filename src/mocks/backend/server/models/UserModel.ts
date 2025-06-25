import { User } from '../types';

export class UserModel implements User {
    constructor(
        public id: string,
        public uuid: string,
        public name: string,
        public pass: string,
        public email: string,
        public image: string,
    ) {}
}

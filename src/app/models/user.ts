export class User {

    constructor(
        public id: string,
        public username: string,
        public email: string,
        public password: string,
        public role: Role,
        public token?: string
    ) { }
}

export enum Role {
    ADMIN,
    USER,
    RETAILER
}

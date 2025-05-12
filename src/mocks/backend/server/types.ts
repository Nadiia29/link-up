export interface HandlerArgs {
    request: Request;
}

export interface User {
    id: string;
    name: string;
    pass: string;
    email: string;
    image: string;
}

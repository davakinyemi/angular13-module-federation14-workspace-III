export interface AuthUserData {
    email: string;
    password: string;
}

export interface AuthUserResponse {
    id: number;
    token: string;
}

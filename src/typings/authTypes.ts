export interface AuthCredentials {
    username: string;
    password: string;
}

export interface SignupDetails extends AuthCredentials {
    email: string;
}
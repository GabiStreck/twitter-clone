
export type User = {
    id?: number | undefined;
    username?: string | undefined;
    email?: string | undefined;
    provider?: string | undefined;
    confirmed?: boolean | undefined;
    blocked?: boolean | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    lastName?: string | undefined;
    firstName?: string | undefined;
    image?: any | undefined;
}

export type UserSignUp = {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    image: File | null
}

export type UserSignIn = {
    identifier: string;
    password: string;
}
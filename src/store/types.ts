export interface RootState {
    version: string,
    language: string
}

export interface UserState {
    user: User,
}

export interface User {
    name?: string,
    email?:string
}
export type Profile = {
    id: number,
    email: string,
    name: string,
    avatar: string
}

export type ProfileType = {
    profile: Profile[],
    message: string
}

export type IdProfile = {
    id: number
}
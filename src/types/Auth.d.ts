interface AuthProfile {
    email: string
    email_verified: boolean
    family_name: string
    given_name: string
    locale: string
    name: string
    picture: string
    sub: string
}

interface AuthProviderData {
    authProfile?: AuthProfile,
    access_token: string,
    refresh_token: string
}
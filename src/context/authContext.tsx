import React, { useCallback, useState } from 'react'

interface AuthContextValue extends AuthProviderData {
    signIn: (data: AuthProviderData) => void,
    logOut: () => void,
    isAuthenticated: () => boolean
}

const AuthContext = React.createContext<AuthContextValue>({
    access_token: "",
    refresh_token: "",
    signIn(data) {

    },
    logOut() {

    },
    isAuthenticated() {
        return false
    },
})

export const useAuth = () => React.useContext(AuthContext)


interface Props {
    children: any | any[]
}
const AuthProvider = ({ children }: Props) => {
    const [authProfile, setAuthProfile] = useState<AuthProviderData>(() => {
        let access_token = localStorage.getItem("access_token") || ""
        let refresh_token = localStorage.getItem("refresh_token") || ""
        let parseAuth: AuthProfile | undefined
        let authProfile = localStorage.getItem("auth.info")
        if (authProfile) {
            parseAuth = JSON.parse(authProfile) as AuthProfile
        }
        return {
            access_token,
            refresh_token,
            authProfile: parseAuth
        }
    })

    const signIn = useCallback<(data: AuthProviderData) => void>((data) => {
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("refresh_token", data.refresh_token)
        if (data.authProfile) localStorage.setItem("auth.info", JSON.stringify(data.authProfile))
        setAuthProfile(data)
    }, [])

    const logOut = useCallback(() => {
        setAuthProfile({
            refresh_token: "",
            access_token: "",
            authProfile: undefined
        })

        localStorage.removeItem("access_token")
        localStorage.removeItem("access_token")
        localStorage.removeItem("auth.info")

    }, [])

    const isAuthenticated = useCallback(() => {
        return authProfile.refresh_token ? true : false
    }, [authProfile])

    return (
        <AuthContext.Provider value={{ ...authProfile, signIn, logOut, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider
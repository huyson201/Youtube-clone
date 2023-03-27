/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_API_KEY: string
    readonly VITE_APP_GOOGLE_ID: string
    readonly VITE_APP_GOOGLE_SECRET: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}





import { defineStore } from 'pinia'
import { User } from '~~/types/users'
interface Auth {
    jwt: string,
    user: User | undefined
}

const useAuthStore = defineStore('auth', {
    state: () => ({
        auth: <Auth>{
            jwt: '',
            user: undefined
        },
        loading: false
    }),
    getters: {
        user: (state) => state.auth.user,
        token: (state) => state.auth.jwt
    },
    actions: {
        setAuth(authStrapi: Auth) {
            this.auth = authStrapi
        },
        setLoading(value: boolean) {
            this.loading = value
        },
        clearAuth() {
            this.auth = {
                jwt: '',
                user: undefined
            }
        }
    },
    persist: {
        storage: persistedState.sessionStorage,
    },
})

export default useAuthStore
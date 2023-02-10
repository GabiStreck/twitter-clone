import useAuthStore from "~~/store/useAuthStore";
import { UserSignIn, UserSignUp } from "~~/types/users";
const useAuth = () => {
    const { setAuth, clearAuth, user, auth } = useAuthStore()
    const loadingPage = useState('auth_loading', () => true)

    const setLoadingPage = (value: boolean) => {
        const authLoading = loadingPage
        authLoading.value = value
    }

    const signIn = (data: UserSignIn) => {
        return new Promise(async (resolve, reject) => {
            try {
                setLoadingPage(true)
                const { login } = useStrapiAuth()
                const { jwt, user } = await login(data)
                const userData = await useStrapi().findOne('users', user?.value?.id, { populate: '*' })

                setAuth({
                    jwt: jwt,
                    user: userData
                })
                resolve(true)
            } catch (error) {
                reject(error)
            }
            finally {
                setLoadingPage(false)
            }
        })
    }

    const signUp = (data: UserSignUp) => {
        return new Promise(async (resolve, reject) => {
            try {
                setLoadingPage(true)
                const { register } = useStrapiAuth()
                const { jwt, user } = await register(data)
                setAuth({
                    jwt: jwt,
                    user: {
                        ...user.value
                    }
                })
                resolve(true)
            } catch (error) {
                reject(error)
            }
            finally {
                setLoadingPage(false)
            }
        })
    }

    const logout = async () => {
        setLoadingPage(true)
        clearAuth()
        useStrapiAuth().logout()
        setLoadingPage(false)
    }

    const init = () => {
        return new Promise(async (resolve, reject) => {
            try {
                setLoadingPage(true)
                if (!user) {
                    const userData = { ...useStrapiUser().value }
                    setAuth({
                        ...auth,
                        user: Object.keys(userData).length === 0 && userData.constructor === Object ? undefined : userData
                    })
                }
                setLoadingPage(false)
                resolve(true)
            } catch (error) {
                reject(error)
            }

        })
    }

    return { signIn, signUp, logout, init, loadingPage }
}

export default useAuth
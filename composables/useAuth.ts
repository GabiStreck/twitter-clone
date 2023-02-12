import useAuthStore from "~~/store/useAuthStore";
import { User, UserSignIn, UserSignUp } from "~~/types/users";
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
                    /* @ts-ignore */
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

                if (Object.keys(data).length == 0) return
                setLoadingPage(true)
                const { register } = useStrapiAuth()
                /* @ts-ignore */
                const { jwt, user } = await register(data)
                let userData: User = {
                    ...user.value
                }

                if (data.image && user) {
                    try {
                        const formData = new FormData()
                        formData.append('files', data.image)
                        /* @ts-ignore */
                        formData.append('refId', userData.id);
                        formData.append('ref', 'plugin::users-permissions.user');
                        formData.append('field', 'image');
                        const client = useStrapiClient()
                        const result: any[] = await client(`/upload`, {
                            method: 'POST',
                            body: formData,
                        })
                        userData['image'] = result[0]
                    } catch (error) {
                        console.log(error);
                    }
                }
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
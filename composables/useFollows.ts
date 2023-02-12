import useAuthStore from '~~/store/useAuthStore';
import { User } from '~~/types/users';

const useFollows = () => {
    const loading = useState('loading_follow')
    const setLoading = (value: boolean) => {
        let loadingTweet = loading
        loadingTweet.value = value
    }

    const getFollowers = async (): Promise<User[]> =>
        new Promise(async (resolve, reject) => {
            try {
                setLoading(true)
                const following = await useStrapi4().find('findFollowing')
                /* @ts-ignore */
                resolve(following.data)
            } catch (error) {
                reject(error)
            } finally {
                setLoading(false)
            }
        })

    const createFollow = async (id: string | number): Promise<User[]> =>
        new Promise(async (resolve, reject) => {
            try {
                setLoading(true)
                const following = await useStrapi4().create('follows', {
                    following: id
                })
                /* @ts-ignore */
                resolve(true)
            } catch (error) {
                reject(error)
            } finally {
                setLoading(false)
            }
        })

    return {
        loading,
        createFollow,
        getFollowers
    }
}
export default useFollows
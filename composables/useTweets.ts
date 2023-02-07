import { TweetForm, Tweet } from '~~/types/tweets';

const useTweets = () => {
    const tweets = useState('tweets')
    const createTweet = async (data: TweetForm) => new Promise(async (resolve, reject) => {
        try {
            if (Object.keys(data).length == 0) return
            const formData = new FormData()
            if (data.mediaFiles) {
                formData.append("files.mediaFiles", data.mediaFiles)
                delete (data.mediaFiles)
            }
            formData.append('data', JSON.stringify(data))
            const client = useStrapiClient()
            await client<Tweet>(`/tweets`, {
                method: 'POST',
                body: formData
            })
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })


    const getTweets = async () => new Promise(async (resolve, reject) => {
        try {
            const { data } = await useStrapi().find('tweets')
            tweets.value = data
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })

    return {
        tweets,
        createTweet,
        getTweets
    }
}

export default useTweets
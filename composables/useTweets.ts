import { TweetForm, Tweet, TweetDetailResponse, TweetListResponse } from '~~/types/tweets';

const useTweets = () => {
    const loading = useState('loading_tweet')

    const setLoading = (value: boolean) => {
        let loadingTweet = loading
        loadingTweet.value = value
    }

    const createTweet = async (data: TweetForm) => new Promise(async (resolve, reject) => {
        try {
            setLoading(true)
            if (Object.keys(data).length == 0) return
            const formData = new FormData()
            if (data.mediaFiles) {
                formData.append("files.mediaFiles", data.mediaFiles)
                delete (data.mediaFiles)
            }
            formData.append('data', JSON.stringify(data))
            const client = useStrapiClient()
            const result = await client<Tweet>(`/tweets`, {
                method: 'POST',
                body: formData
            })
            resolve(result)
        } catch (error) {
            reject(error)
        } finally {
            setLoading(false)
        }
    })

    const getTweets = async (): Promise<Tweet[]> =>
        new Promise(async (resolve, reject) => {
            try {
                setLoading(true)
                const { data } = await useStrapi().find('tweets', {
                    populate: {
                        mediaFiles: true,
                        author: {
                            populate: ['image']
                        },
                        reply: {
                            populate: ['author']
                        }
                    }
                })
                /* @ts-ignore */
                const tweets = data?.map((item: TweetListResponse) => {
                    const tweet = item.attributes
                    return {
                        ...tweet,
                        author: tweet.author.data.attributes,
                        reply: tweet.reply?.data?.attributes ? {
                            ...tweet.reply?.data?.attributes,
                            id: tweet.reply?.data?.id,
                            author: {
                                ...tweet.reply?.data?.attributes.author.data.attributes,
                                id: tweet.reply?.data?.attributes.author.data.id
                            }
                        } : null
                    }
                })
                resolve(tweets)
            } catch (error) {
                reject(error)
            } finally {
                setLoading(false)
            }
        })

    const getTweetDetail = async (id: string): Promise<TweetDetailResponse> => new Promise(async (resolve, reject) => {
        try {
            setLoading(true)
            /* @ts-ignore */
            const { data } = await useStrapi4().find('findReplies', { id: id })
            resolve(data.attributes)
        } catch (error) {
            reject(error)
        } finally {
            setLoading(false)
        }
    })

    return {
        loading,
        createTweet,
        getTweets,
        getTweetDetail
    }
}

export default useTweets
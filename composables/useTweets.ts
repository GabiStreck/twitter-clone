import { Tweet } from '~~/types/tweets';

export const useTweets = (): Tweet[] => {
    const tweets: Tweet[] = [
        {
            id: 'fasjdasjdhnasd212',
            title: 'SpaceX',
            numberOfTweets: 24354
        },
        {
            id: 'fasjddasasjdhnasd',
            title: 'SpaceX',
            numberOfTweets: 12000
        },
        {
            id: 'fasjfasfadasjdhna',
            title: 'SpaceX',
            numberOfTweets: 100
        }
    ]
    return tweets
}
import { User } from './users'

export type Tweet = {
    id?: string;
    text: string;
    author: User | any;
    repliesCount: number | null;
    mediaFiles: any;
    createdAt?: Date;
    updatedAt?: Date;
    reply?: Tweet | any;
}

export type TweetDetailResponse = {
    replies: Tweet[],
    tweet: Tweet
}

export type TweetListResponse = {
    id: string,
    attributes: Tweet
}

export type TweetForm = {
    text: string;
    author: User;
    mediaFiles?: File;
    reply?: string;
}

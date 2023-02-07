import { User } from './users'

export type Tweet = {
    id?: string;
    text: string;
    author: User;
    repliesCount: number;
    mediaFiles: string | undefined | File;
    replies: User[] | null;
}

export type TweetForm = {
    text: string;
    author: User;
    mediaFiles?: File;
}

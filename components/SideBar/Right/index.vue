<template>
    <div class="flex flex-col p-2 gap-2">

        <Menu title="What's happening" v-if="tweets">
            <MenuItem v-for="tweet in tweets" :key="tweet.id">
            <template v-slot:contein>
                <div class="flex flex-col">
                    <div class="font-bold text-sm">{{ tweet.title }}</div>
                    <div class="text-xs text-gray-400">{{ useTweetNumberFormatting(tweet.numberOfTweets) }}
                        tweets
                    </div>
                </div>
            </template>
            </MenuItem>
        </Menu>

        <Menu title="Who to Follow" v-if="tweets">
            <MenuItem v-for="user in follows" :key="user.id">
            <template v-slot:contein>
                <UserAvatar :name="user.name" :image="user.image" :handle="user.handle" />
            </template>
            <template v-slot:actions>
                <div class="font-bold text-sm ">
                    <Button :onClick="() => { }">
                        Follow
                    </Button>
                </div>
            </template>
            </MenuItem>
        </Menu>

    </div>
</template>

<script setup lang="ts">
import { Tweet } from '~~/types/tweets';
import { User } from '~~/types/users';
import { useTweetNumberFormatting } from '@/composables/useFormaters'
import { useTweets } from '@/composables/useTweets'
import { useUsers } from '@/composables/useUsers'

const tweets = <Tweet[]>useTweets()
const follows = <User[]>useUsers()
</script>
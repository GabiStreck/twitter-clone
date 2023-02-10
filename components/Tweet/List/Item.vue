<template>
    <article class="flex space-x-1 p-2 my-2">
        <div class="flex h-full justify-center w-16">
            <UserAvatar :image="tweet?.author?.image?.url" />
        </div>
        <div class="flex flex-col w-full space-y-2">
            <header>
                <div class="flex space-x-2">
                    <span class="text-sm font-bold" v-if="tweet.author?.firstName">
                        {{ tweet.author?.firstName }}
                    </span>
                    <span class="text-sm font-bold" v-if="tweet.author?.lastName">
                        {{ tweet.author?.lastName }}
                    </span>
                    <div class="text-sm text-gray-400 font-semibold">
                        {{ tweet.author?.username }} . {{ createDate }}
                    </div>
                </div>
                <div class="text-xs font-semibold" v-if="tweet.reply?.id">
                    Reply to <nuxt-link :to="`/detail/${tweet.reply?.id}`" class="text-blue-400 cursor-pointer">
                        {{ tweet.reply?.author?.username }}
                    </nuxt-link>
                </div>
            </header>
            <div class="py-3">
                {{ tweet.text }}
                <img v-if="images?.length" v-for="(imageUrl, index) in images" :src="useStrapiMedia(imageUrl)"
                    class="w-full" :key="index" />
            </div>

            <footer class="flex items-center justify-around py-2">
                <IconButton>
                    <ChatBubbleOvalLeftEllipsisIcon class="cursor-pointer dark:bg-white hover:text-blue-400 w-5" />
                </IconButton>
                <IconButton>
                    <ArrowPathIcon class="cursor-pointer dark:bg-white hover:text-blue-400 w-5" />
                </IconButton>
                <IconButton>
                    <HeartIcon class="cursor-pointer dark:bg-white hover:text-blue-400 w-5" />
                </IconButton>
                <IconButton>
                    <ArrowUpTrayIcon class="cursor-pointer dark:bg-white hover:text-blue-400 w-5" />
                </IconButton>
            </footer>
        </div>
    </article>
</template>

<script setup lang="ts">
import useTimeFormat from '~~/composables/useTimeFormat';
import { ChatBubbleOvalLeftEllipsisIcon, ArrowPathIcon, HeartIcon, ArrowUpTrayIcon } from '@heroicons/vue/24/outline'
import { Tweet } from '~~/types/tweets';

const { tweet } = defineProps<{
    tweet: Tweet
}>()

const images = computed((): string[] | undefined => {
    if (!tweet.mediaFiles) return;
    /* @ts-ignore */
    const { data } = tweet.mediaFiles
    if (data) return data.map(({ attributes }: any): string => attributes.url)
})

const createDate = computed(() => tweet.createdAt && useTimeFormat(new Date(tweet.createdAt)))
</script>
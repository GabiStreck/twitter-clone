<template>
    <MainContainer title="Tweet">
        <Loading v-if="loading && !replies" />
        <div v-if="replies" class="border divide-y rounded-xl" :class="borderColor">
            <TweetListItem v-if="tweet" :tweet="tweet" />
            <div class="pl-12 py-2 " v-if="tweet">
                <TweetForm :reply="tweet" @on-success="onSuccess" />
                <div class="my-2">
                    <Loading v-if="loading" />
                </div>
            </div>
            <TweetList :tweets="replies" :isReply="true" />
        </div>
    </MainContainer>
</template>

<script setup lang="ts">
import useTweets from '@/composables/useTweets';
import useTailwindConfig from '@/composables/useTailwindConfig';
import { Tweet } from '~~/types/tweets';
const { borderColor } = useTailwindConfig()
const { getTweetDetail, loading } = useTweets()
const tweet = ref()
const replies = ref()

useHead({
    title: 'Tweets'
})

onBeforeMount(async () => {
    const id = window.location.pathname.split('/').pop()

    /* @ts-ignore */
    const data: TweetDetailResponse = await getTweetDetail(id)
    tweet.value = data.tweet
    replies.value = data.replies
})

const onSuccess = (data: Tweet) => {
    replies.value = [data, ...replies.value]
}
</script>
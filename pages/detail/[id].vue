<template>
    <MainContainer title="Tweet">
        <Loading v-if="loading" />
        <div v-else class="border divide-y rounded-xl" :class="borderColor">
            <TweetListItem v-if="tweet" :tweet="tweet" />
            <div class="pl-12 py-2" v-if="tweet">
                <TweetForm :reply="tweet" />
            </div>
            <TweetList :tweets="replies" :isReply="true" />
        </div>
    </MainContainer>
</template>

<script setup lang="ts">
import useTweets from '@/composables/useTweets';
import useTailwindConfig from '@/composables/useTailwindConfig';
const { borderColor } = useTailwindConfig()
const { getTweetDetail, loading } = useTweets()
const tweet = ref()
const replies = ref()

useHead({
    title: 'Tweets'
})

onBeforeMount(async () => {
    const { params } = useRoute();

    if (params.id) {
        /* @ts-ignore */
        const data: TweetDetailResponse = await getTweetDetail(params.id)
        tweet.value = data.tweet
        replies.value = data.replies
    } else {
        window.location.reload()
    }
})
</script>
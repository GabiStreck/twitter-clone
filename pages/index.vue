<template>
    <MainContainer title="Home">
        <div>
            <TweetForm @on-success="onSuccess" />
        </div>
        <div class="py-5">
            <Loading v-if="loading" />
        </div>
        <TweetList :tweets="tweets" />
    </MainContainer>
</template>

<script setup lang="ts">
import useTweets from '~~/composables/useTweets';
import { Tweet } from '~~/types/tweets';

const { getTweets, loading } = useTweets()
const tweets = ref()

onBeforeMount(async () => {
    const value = await getTweets()
    tweets.value = value
})

const onSuccess = (data: Tweet) => {
    tweets.value = [data, ...tweets.value]
}
</script>
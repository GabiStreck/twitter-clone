<template>
    <MainContainer title="Home">
        <div>
            <TweetForm />
        </div>
        <div>
            <Loading v-if="loading" />
            <TweetList v-else :tweets="tweets" />
        </div>
    </MainContainer>
</template>

<script setup lang="ts">
import useTweets from '~~/composables/useTweets';
const { getTweets, loading } = useTweets()
const tweets = ref()

onBeforeMount(async () => {
    tweets.value = await getTweets()
})
</script>
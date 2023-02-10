<template>
    <div v-if="tweets" :class="className">
        <template v-for="tweet in  tweets " :key="tweet.id">
            <div :class="classPadding">
                <TweetListItem :tweet="{ ...tweet }" />
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { Tweet } from '~~/types/tweets';

const { tweets, isReply } = defineProps<{
    tweets: Tweet[],
    isReply?: boolean
}>()

const { borderColor } = useTailwindConfig()
const classPadding = computed(() => isReply ? 'pl-12' : 'border rounded-xl my-4')
const className = computed(() => isReply ? `border divide-y ${borderColor}` : '')
</script>
<template>
    <div class="flex flex-col p-2 gap-2">

        <Menu title="What's happening" v-if="tweets?.length">
            <MenuItem v-for="tweet in tweets" :key="tweet.id">
            <template v-slot:contein>
                <div class="flex flex-col">
                    <div class="font-bold text-sm">{{ tweet.author.username }}</div>
                    <div class="text-xs text-gray-400">{{ useTweetNumberFormatting(tweet?.repliesCount || 0) }}
                        tweets
                    </div>
                </div>
            </template>
            </MenuItem>
        </Menu>

        <Menu title="Who to Follow" v-if="follows?.length">
            <MenuItem v-for="user in follows" :key="user.id">
            <template v-slot:contein>
                <UserAvatar :name="`${user.firstName ?? ''} ${user.lastName ?? ''}`" :image="user.image"
                    :username="user.username" />
            </template>
            <template v-slot:actions>
                <div class="font-bold text-sm ">
                    <Button size="sm" :onClick="() => onFollow(user.id)">
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
import { useTweetNumberFormatting } from '@/composables/useFormaters'
import useFollows from '@/composables/useFollows'

const { getFollowers, createFollow } = useFollows()
const follows = ref()
const tweets: Tweet[] = []

const onFollow = async (id: string | number) => {
    const success = await createFollow(id)
    if (success) {
        window.location.reload()
    }
}

onBeforeMount(async () => {
    const data = await getFollowers()
    follows.value = data
})
</script>
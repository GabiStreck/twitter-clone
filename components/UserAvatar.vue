<template>
    <div class="flex flex-row">
        <img v-if="image" :src="useStrapiMedia(image)" alt="profile" class="w-10 h-10 rounded-full object-cover">
        <img v-else src="~/assets/images/default-user-image.png" alt="profile"
            class="w-10 h-10 rounded-full object-cover">
        <div class="flex flex-col ml-2">
            <span v-if="name" class="text-sm font-bold text-gray-900 dark:text-white">{{ name }}</span>
            <span class="text-xs text-gray-400" v-if="username">{{ username }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">

const { image, name, username } = defineProps<{
    image?: string | undefined;
    name?: string | undefined;
    username?: string | undefined;
}>()
</script>
<template>
    <div class="flex flex-row">
        <img :src="image" :alt="name" class="w-10 h-10 rounded-full object-cover">
        <div class="flex flex-col ml-2">
            <span class="text-sm font-bold text-gray-900 dark:text-white">{{ name }}</span>
            <span class="text-xs text-gray-400">{{ handle }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
const { image, name, handle } = defineProps<{
    image: string;
    name: string;
    handle: string;
}>()
</script>
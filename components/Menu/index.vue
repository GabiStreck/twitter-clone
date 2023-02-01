<template>
    <div
        class="flex flex-col dark:text-white bg-gray-50 dark:bg-dim-700 rounded-2xl border border-gray-100 overflow-hidden">
        <div class="font-extrabold text-lg p-3 border-b">
            {{ title }}
        </div>
        <div class="flex flex-col ">
            <slot />
        </div>
        <div class=" p-3 font-bold text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300">
            Show more
        </div>
    </div>
</template>

<script setup lang="ts">
const { title } = defineProps<{

    title: string
}>()
</script>
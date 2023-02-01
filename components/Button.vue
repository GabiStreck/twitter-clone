<template>
    <button @click="onClick"
        class="px-4 py-2 text-xs font-bold text-white bg-black rounded-full dark:text-black dark:bg-white">
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps<{
    onClick: () => {} | null | undefined
}>()
</script>
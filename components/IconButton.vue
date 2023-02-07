<template>
    <div @click="onClick"
        class="flex items-center justify-center rounded-full w-8 h-8 cursor-pointer hover:bg-blue-50 dark:hover:bg-dim-800 ">
        <slot />
    </div>
</template>

<script setup lang="ts">
const { onClick } = defineProps<{
    onClick?: () => void;
}>()
</script>
<template>
    <main class="w-full h-full">
        <header class="h-14 font-bold text-lg pl-5 flex items-center dark:text-white" v-if="title">{{ title }}</header>
        <section class="">
            <slot />
        </section>
    </main>
</template>

<script setup lang="ts">
const { title } = defineProps<{
    title?: string | undefined;
}>()
</script>

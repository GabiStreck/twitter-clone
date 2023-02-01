<template>
    <nuxt-link :to="href"
        class="flex items-center p-3 text-black rounded-full w-min hover:bg-gray-200 dark:hover:bg-dim-200 dark:text-white"
        :class="transition">
        <div class="w-6 h-6 text-dark">
            <slot name="icon" />
        </div>
        <div class="hidden ml-4 text-xl xl:block" :class="isActive">
            <slot name="name" />
        </div>

    </nuxt-link>
</template>

<script setup lang="ts">
const { transition } = useTailwindConfig()
const { href } = defineProps<{
    href?: string
}>()
const route = useRoute()

const isActive = computed((): string => route.path === href ? 'font-semibold' : 'font-normal')
</script>
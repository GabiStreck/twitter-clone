<template>
    <button @click="onClick" :disabled="disabled" :type="typeButton" :class="generateClass">
        <slot />
    </button>
</template>

<script setup lang="ts">
const { onClick, disabled, type, size, className, widthFull, color, background } = defineProps<{
    onClick: () => {} | null | undefined,
    disabled?: boolean
    size?: string
    type?: string
    color?: string
    background?: string
    widthFull?: boolean
    className?: string
}>()

const typeButton = <"button" | "submit" | "reset" | undefined>(type || 'button')
const sizeButton = <"xs" | "sm" | "md" | "lg" | "xl">(size || 'md')

const generateClass = computed(() => {
    if (className) return className

    const textSize = sizeButton ? `text-${sizeButton}` : 'text-sm'

    const widthButton = (() => {
        if (widthFull) return 'w-full'
        if (sizeButton === 'lg' || 'xl') return 'w-auto'
        return 'w-min'
    })()

    const padding = (() => {
        switch (sizeButton) {
            case 'sm': return 'px-3 py-1'
            case 'xs': return 'px-2'
            default: return 'px-4 py-2'
        }
    })()

    const colorText = color ? `text-${color}` : 'text-white'
    const colorBg = background ? `bg-${background}-400 disabled:bg-${background}-300` : 'bg-black'
    return `${textSize} ${widthButton} ${padding} ${colorText} ${colorBg} disabled:cursor-not-allowed cursor-pointer font-bold font-sm rounded-full dark:text-black dark:bg-white hover:bg-blue-400 dark:hover:bg-blue-400 dark:hover:text-white`
})
</script>
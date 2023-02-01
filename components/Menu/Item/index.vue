<template>
    <div class="cursor-pointer border-b hover:bg-gray-100 dark:hover:bg-dim-300 p-3" :class="styles">
        <div class="flex flex-row justify-between items-center">
            <div>
                <slot name="contein" />
            </div>

            <div>
                <slot name="actions" />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const { transition, borderColor } = useTailwindConfig()

const styles = computed(() => `"${transition} ${borderColor}"`)
</script>
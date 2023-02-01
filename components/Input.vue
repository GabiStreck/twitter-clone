<template>
    <div>
        <label for="" v-if="label" class="text-sm text-gray-700 block ml-px pl-1 mb-1 font-medium">
            {{ label }}
        </label>
        <input :value="modelValue"
            @input="event => emits('update:modelValue', (event.target as HTMLInputElement).value)"
            class="w-full  block px-4 rounded-full focus:ring-blue-500 h-10 focus:border-blue-500 sm:text-sm shadow-sm"
            :placeholder="placeholder" :require="require" :type="type">
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['update:modelValue'])
const { modelValue, label, placeholder, require, type } = defineProps<{
    modelValue?: string | ''
    label?: string | undefined,
    placeholder?: string | '',
    require?: boolean | false,
    type?: string | 'text'
}>()

</script>
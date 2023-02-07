<template>
    <div class="h-screen">
        <div class="flex">
            <div class="relative flex-1 hidden w-0 lg:block">
                <img src="https://picsum.photos/1200"
                    class="absolute filter blur-[2px] inset-0 object-cover w-full h-full" />
            </div>
            <div
                class="flex items-center justify-center flex-1 h-full min-h-screen px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
                <div class="flex items-center w-full h-full max-w-sm mx-auto lg:w-96 ">
                    <AuthFormSignIn v-if="formSelected === 'signIn'" :selectForm="onSelectForm" />
                    <AuthFormSignUp v-else :selectForm="onSelectForm" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const formSelected = ref('signIn')

const onSelectForm = (value: string) => {
    formSelected.value = value
}
</script>
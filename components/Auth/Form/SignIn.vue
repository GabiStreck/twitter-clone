<template>
    <div class="w-full flex flex-col space-y-8">
        <div class="flex flex-col items-center justify-center space-y-4">
            <div class="w-24 h-24">
                <Logo />
            </div>
            <h1 class="text-2xl font-bold">Sign in to your account</h1>
        </div>
        <div class="flex flex-col space-y-6 pt-8">
            <div>
                <Input v-model="data.identifier" type="text" label="Username" placeholder="@username" />
            </div>
            <div>
                <Input v-model="data.password" type="password" label="Password" placeholder="*********" />
            </div>
        </div>
        <div class="flex items-center justify-between">
            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                Forgot password?
            </a>
        </div>

        <Button :onClick="submitLogin" class="w-full h-10">
            Sign in
        </Button>

        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?
            <span @click="() => selectForm('signUp')"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer">
                Sign up
            </span>
        </p>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import useAuth from '~~/composables/useAuth';

defineProps<{
    selectForm: (value: string) => {} | null | undefined
}>()

const data = reactive<userSignIn>({
    identifier: "",
    password: ""
})

const submitLogin = async () => {
    await useAuth().signIn(data)
}
</script>
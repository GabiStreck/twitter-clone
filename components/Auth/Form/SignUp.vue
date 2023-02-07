<template>
    <div class="w-full flex flex-col space-y-8">
        <div class="flex flex-col items-center justify-center space-y-4">
            <div class="w-24 h-24">
                <Logo />
            </div>
            <h1 class="text-2xl font-bold">Create your account</h1>
        </div>
        <div class="flex flex-col space-y-6 pt-8">
            <div>
                <Input v-model="data.firstName" type="text" label="First Name" placeholder="Enter your first name" />
            </div>
            <div>
                <Input v-model="data.lastName" type="text" label="Last Name" placeholder="Enter your last name" />
            </div>
            <div>
                <Input v-model="data.username" type="text" label="Username" placeholder="@username" />
            </div>
            <div>
                <Input v-model="data.password" type="password" label="Password" placeholder="*********" />
            </div>
            <div>
                <Input v-model="data.email" type="email" label="Email" placeholder="twitter@clone.com" />
            </div>
        </div>
        <Button :onClick="onSubmit" class="w-full h-10">
            Create account
        </Button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            I already have a clone twitter account.
            <span @click="() => selectForm('signIn')"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer">
                Sign In
            </span>
        </p>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { UserSignUp } from '~/types/users'
import useAuth from '~~/composables/useAuth';

defineProps<{
    selectForm: (value: string) => {} | null | undefined
}>()

const data = reactive<UserSignUp>({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
})

const onSubmit = async () => {
    await useAuth().signUp(data)
}
</script>
<template>
    <div class="w-full flex flex-col space-y-8">
        <div class="flex flex-col items-center justify-center space-y-4">
            <div class="w-16 h-16">
                <Logo />
            </div>
            <h1 class="text-xl font-bold dark:text-white">Create your account</h1>
        </div>

        <div class="flex flex-col space-y-6">
            <div class="flex w-full items-center justify-center cursor-pointer">
                <input type="file" ref="imageRef" hidden accept="image/*"
                    @change="(event) => onSelectImage((event.target as HTMLInputElement)?.files)" />
                <img v-if="imageUrl" class="w-24 h-24 rounded-full object-cover" :src="imageUrl" @click="onFindImage" />
                <img v-else src="~/assets/images/default-user-image.png" alt="profile"
                    class="w-24 h-24 rounded-full object-cover" @click="onFindImage">
            </div>
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
const imageRef = ref()
const imageUrl = ref()
const data = reactive<UserSignUp>({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    image: null
})

const onSubmit = async () => {
    await useAuth().signUp(data)
}

const onFindImage = (): void => {
    imageRef.value.click()
}

const onSelectImage = (files: FileList | null): void => {
    if (files?.length) {
        const file = files[0];
        data.image = file
        imageUrl.value = URL.createObjectURL(file)
    }
}
</script>
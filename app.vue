<template>
    <div :class="{ 'dark': darkStore.darkMode }">
        <div class="bg-white dark:bg-dim-900">

            <LoadingPage v-if="loadingPage" />

            <div v-else-if="authStore.user" class="min-h-full">
                <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
                    <div class="hidden md:block xs-col-span-1 xl:col-span-2">
                        <div class="sticky top-0">
                            <SideBarLeft />
                        </div>
                    </div>
                    <main class="col-span-12 md:col-span-8 xl:col-span-6">
                        <router-view />
                    </main>
                    <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
                        <div class="sticky top-0">
                            <SideBarRight />
                        </div>
                    </div>
                </div>
            </div>

            <AuthPage v-else />
        </div>
    </div>
</template>

<script setup lang="ts">
import useDarkModeStore from '@/store/useDarkModeStore'
import useAuthStore from '@/store/useAuthStore'
import useAuth from '@/composables/useAuth'

const darkStore = useDarkModeStore()
const authStore = useAuthStore()
const { init, loadingPage } = useAuth()

onBeforeMount(async () => {
    await init()
})
</script>
<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/solid'
import {
    HashtagIcon, BellIcon, BookmarkIcon, InboxIcon, PowerIcon,
    DocumentTextIcon, UserIcon, EllipsisHorizontalCircleIcon
} from '@heroicons/vue/24/outline'
import useDarkModeStore from '@/store/useDarkModeStore'
import useAuth from '~~/composables/useAuth';

const { setDarkMode } = useDarkModeStore()
const { transition } = useTailwindConfig()
const { logout } = useAuth()
</script>

<template>
    <div class="h-screen flex flex-col">
        <div class="p-2 py-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20" :class="transition">
            <div class="w-8 h-8" @click="setDarkMode">
                <Logo />
            </div>
        </div>
        <div>
            <SideBarLinkButton href="/">
                <template v-slot:icon>
                    <HomeIcon />
                </template>
                <template v-slot:name>
                    Home
                </template>
            </SideBarLinkButton>
            <SideBarLinkButton href="#">
                <template v-slot:icon>
                    <HashtagIcon />
                </template>
                <template v-slot:name>
                    Explore
                </template>
            </SideBarLinkButton>
            <SideBarLinkButton href="#">
                <template v-slot:icon>
                    <BellIcon />
                </template>
                <template v-slot:name>
                    Notification
                </template>
            </SideBarLinkButton>
            <SideBarLinkButton href="#">
                <template v-slot:icon>
                    <InboxIcon />
                </template>
                <template v-slot:name>
                    Messages
                </template>
            </SideBarLinkButton>
            <SideBarLinkButton href="#">
                <template v-slot:icon>
                    <BookmarkIcon />
                </template>
                <template v-slot:name>
                    Bookmarks
                </template>
            </SideBarLinkButton>

            <SideBarLinkButton href="#">
                <template v-slot:icon>
                    <DocumentTextIcon />
                </template>
                <template v-slot:name>
                    Lists
                </template>
            </SideBarLinkButton>
            <SideBarLinkButton href="#">
                <template v-slot:icon>
                    <UserIcon />
                </template>
                <template v-slot:name>
                    Profile
                </template>
            </SideBarLinkButton>
            <SideBarLinkButton href="#">
                <template v-slot:icon>
                    <EllipsisHorizontalCircleIcon />
                </template>
                <template v-slot:name>
                    More
                </template>
            </SideBarLinkButton>
        </div>
        <div class="flex items-center p-3 w-min cursor-pointer" @click="logout">
            <PowerIcon class="w-6 h-6 text-red-400" />

            <span class="hidden ml-4 text-xl xl:block text-red-400 ">Logout</span>
        </div>
    </div>
</template>

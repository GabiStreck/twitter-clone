<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/solid'
import {
    HashtagIcon, BellIcon, BookmarkIcon, InboxIcon,
    DocumentTextIcon, UserIcon, EllipsisHorizontalCircleIcon
} from '@heroicons/vue/24/outline'
import useDarkModeStore from '@/store/useDarkModeStore'
const { setDarkMode } = useDarkModeStore()
const { transition } = useTailwindConfig()
</script>

<template>
    <div class="h-screen flex flex-col">
        <div class="p-2 py-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20" :class="transition">
            <div class="w-8 h-8" @click="setDarkMode">
                <Logo />
            </div>
        </div>
        <div>
            <LazySideBarLinkButton href="/">
                <template v-slot:icon>
                    <HomeIcon />
                </template>
                <template v-slot:name>
                    Home
                </template>
            </LazySideBarLinkButton>
            <LazySideBarLinkButton href="/explore">
                <template v-slot:icon>
                    <HashtagIcon />
                </template>
                <template v-slot:name>
                    Explore
                </template>
            </LazySideBarLinkButton>
            <LazySideBarLinkButton href="/notification">
                <template v-slot:icon>
                    <BellIcon />
                </template>
                <template v-slot:name>
                    Notification
                </template>
            </LazySideBarLinkButton>
            <LazySideBarLinkButton href="/messages">
                <template v-slot:icon>
                    <InboxIcon />
                </template>
                <template v-slot:name>
                    Messages
                </template>
            </LazySideBarLinkButton>
            <LazySideBarLinkButton href="/bootmarks">
                <template v-slot:icon>
                    <BookmarkIcon />
                </template>
                <template v-slot:name>
                    Bookmarks
                </template>
            </LazySideBarLinkButton>

            <LazySideBarLinkButton href="/lists">
                <template v-slot:icon>
                    <DocumentTextIcon />
                </template>
                <template v-slot:name>
                    Lists
                </template>
            </LazySideBarLinkButton>
            <LazySideBarLinkButton href="/profile">
                <template v-slot:icon>
                    <UserIcon />
                </template>
                <template v-slot:name>
                    Profile
                </template>
            </LazySideBarLinkButton>
            <LazySideBarLinkButton href="/more">
                <template v-slot:icon>
                    <EllipsisHorizontalCircleIcon />
                </template>
                <template v-slot:name>
                    More
                </template>
            </LazySideBarLinkButton>
        </div>
    </div>
</template>


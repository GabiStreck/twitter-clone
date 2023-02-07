<template>
    <div class="flex space-x-4 h-32 p-2">
        <div class="flex h-full justify-center w-16">
            <UserAvatar :image="userStore.user.image" />
        </div>
        <div class="flex flex-col w-full space-y-2">
            <textarea placeholder="What's happening?" name="text" v-model="data.text"
                class="h-10 text-lg text-gray-900 bg-transparent border-0 focus:ring-0 dark:text-white placeholder:text-gray-400" />
            <div class="py-2">
                <img v-if="imageUrl" :src="imageUrl" class="border rounded-xl" :class="borderColor" />
                <input type="file" ref="imageRef" hidden accept="image/*"
                    @change="(event) => onSelectImage((event.target as HTMLInputElement)?.files)" />
            </div>

            <div class="flex justify-between pt-2">
                <div class="flex flex-row space-x-1">
                    <IconButton :onClick="onFindImage">
                        <PhotoIcon class="w-5 h-5 text-blue-400" />
                    </IconButton>
                    <IconButton>
                        <GifIcon class="w-5 h-5 text-blue-400" />
                    </IconButton>
                    <IconButton>
                        <FaceSmileIcon class="w-5 h-5 text-blue-400" />
                    </IconButton>
                    <IconButton>
                        <CalendarDaysIcon class="w-5 h-5 text-blue-400" />
                    </IconButton>
                    <IconButton>
                        <Bars3BottomLeftIcon class="w-5 h-5 text-blue-400" />
                    </IconButton>
                </div>
                <Button size="sm" background="blue" :onClick="onSubmit" :disabled="isDisabled">Tweet</Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GifIcon, PhotoIcon, FaceSmileIcon, CalendarDaysIcon, Bars3BottomLeftIcon } from '@heroicons/vue/24/outline';
import useAuthStore from '~~/store/useAuthStore';
import useTailwindConfig from '~~/composables/useTailwindConfig';
import useTweets from '~~/composables/useTweets';
import { TweetForm } from '~~/types/tweets';

const userStore = useAuthStore()
const { borderColor } = useTailwindConfig()
const { createTweet } = useTweets()

const emitTweet = defineEmits(['onSubmit'])
const imageRef = ref()
const imageUrl = ref()
const isDisabled = computed(() => data.text === '')

const data = reactive<TweetForm>({
    text: '',
    mediaFiles: undefined,
    author: userStore.user.id
})

const onSubmit = async () => {
    await createTweet(data)
}


const onFindImage = (): void => {
    imageRef.value.click()
}

const onSelectImage = (files: FileList | null): void => {
    if (files?.length) {
        const file = files[0];
        data.mediaFiles = file
        imageUrl.value = URL.createObjectURL(file)

    }
}
</script>
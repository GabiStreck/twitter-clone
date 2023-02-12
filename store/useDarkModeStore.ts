import { defineStore } from "pinia"

const useDarkModeStore = defineStore('darkMode', {
    state: () => ({
        darkMode: false,
    }),
    actions: {
        setDarkMode() {
            this.darkMode = !this.darkMode
        }
    },
    persist: true
})

export default useDarkModeStore
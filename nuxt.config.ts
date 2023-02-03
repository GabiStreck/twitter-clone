// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/strapi'
    ],
    runtimeConfig: {
        public: {
            strapi: {
                url: process.env.STRAPI_URL || 'http://localhost:1337',
                prefix: '/api',
                version: 'v4',
                cookie: {},
                cookieName: 'strapi_jwt'
            }
        },
    }
})
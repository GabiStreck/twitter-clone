export const useTweetNumberFormatting = (tweetsNumber: number): string => {
    if (tweetsNumber < 1000) return `${tweetsNumber}`
    return `${(tweetsNumber / 1000).toFixed(1)}k`
}


export default {
    useTweetNumberFormatting
}
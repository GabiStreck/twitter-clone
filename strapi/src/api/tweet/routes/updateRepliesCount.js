module.exports = {
    routes: [
        {
            method: 'PATCH',
            path: '/updateRepliesCount',
            handler: 'tweet.updateRepliesCount',
        },
    ],
};
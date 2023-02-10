const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tweet.tweet', ({ strapi }) => ({
    async findReplies(ctx) {
        try {
            const { id } = ctx.query;

            const tweet = await strapi.db.query('api::tweet.tweet').findOne({
                where: { id: id },
                populate: {
                    mediaFiles: true,
                    author: {
                        populate: ['image']
                    }
                }
            });

            const replies = await strapi.db.query('api::tweet.tweet').findMany({
                where: { reply: tweet.id },
                populate: {
                    mediaFiles: true,
                    author: {
                        populate: ['image']
                    }
                }
            });

            return this.transformResponse({ tweet, replies });
        } catch (err) {
            ctx.body = err;
        }
    },
}));

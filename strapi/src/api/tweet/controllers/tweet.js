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
    async find(ctx) {
        ctx.query = { ...ctx.query, local: 'en' };
        const follows = await strapi.query('api::follow.follow').findMany({
            where: { follower: ctx.state.user.id },
            populate: ['following']
        });

        const following = follows.map(({ following }) => following.id)

        const q = following.length > 0 ? [...following, ctx.state.user.id] : ctx.state.user.id

        const data = await strapi.db.query('api::tweet.tweet').findMany({
            where: {
                author: q
            },
            populate: {
                mediaFiles: true,
                author: {
                    populate: ['image'],
                },
                reply: {
                    populate: ['author'],
                }
            },
            orderBy: { createdAt: 'DESC' }
        });

        const meta = { date: null }
        meta.date = Date.now();
        return { data, meta };
    },
    async findOne(ctx) {
        const id = ctx.originalUrl.split('/').pop()
        const data = await strapi.db.query('api::tweet.tweet').findOne({
            where: {
                id: id
            },
            populate: {
                mediaFiles: true,
                author: {
                    populate: ['image'],
                },
                reply: {
                    populate: ['author'],
                }
            }
        });
        const meta = { date: Date.now() }
        return { data, meta };
    },
    async updateRepliesCount(ctx) {
        const { id } = ctx.request.body.id
        if (id) {
            const tweet = await strapi.db.query('api::tweet.tweet').findOne({
                where: { id: id },
            });
            const entry = await strapi.entityService.update('api::tweet.tweet', id, {
                data: {
                    repliesCount: tweet.repliesCount + 1
                },
            });
            return { entry }
        }
        return {}
    }
}));

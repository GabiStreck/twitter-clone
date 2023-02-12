'use strict';

/**
 * follow controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::follow.follow', ({ strapi }) => ({
    async findFollowing(ctx) {
        try {
            const follows = await strapi.query('api::follow.follow').findMany({
                where: { follower: ctx.state.user.id },
                populate: ['following']
            });
            const following = follows.map(({ following }) => following.id)
            const q = following.length > 0 ? [...following, ctx.state.user.id] : ctx.state.user.id

            const data = await strapi.db.query('plugin::users-permissions.user').findMany({
                where: {
                    id: {
                        $notIn: q
                    }
                },
                populate: {
                    image: true
                }
            });

            return { data }
        } catch (err) {
            ctx.body = err;
        }
    },
    async create(ctx) {
        const data = ctx.request.body.data
        const entry = await strapi.entityService.create('api::follow.follow', {
            data: {
                ...data,
                follower: ctx.state.user.id
            },
        });
        return entry

    }
}));
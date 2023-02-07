'use strict';

/**
 * tweet router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tweet.tweet');

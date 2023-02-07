'use strict';

/**
 * tweet controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tweet.tweet');

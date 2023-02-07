'use strict';

/**
 * tweet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tweet.tweet');

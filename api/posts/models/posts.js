'use strict';

const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      axios.post('https://api.netlify.com/build_hooks/6042bbbd1d11bb1352ada54c');
    },
    async afterUpdate(result, params, data) {
      axios.post('https://api.netlify.com/build_hooks/6042bbbd1d11bb1352ada54c');
    }
  }
};

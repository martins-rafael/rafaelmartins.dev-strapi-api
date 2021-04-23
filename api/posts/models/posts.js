'use strict';

const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      axios.post('https://api.vercel.com/v1/integrations/deploy/prj_XFTbEbF4zYx6SPp9IuRm0Es801vZ/c31BrX0A9a');
    },
    async afterUpdate(result, params, data) {
      axios.post('https://api.vercel.com/v1/integrations/deploy/prj_XFTbEbF4zYx6SPp9IuRm0Es801vZ/c31BrX0A9a');
    }
  }
};

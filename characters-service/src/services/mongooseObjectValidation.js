import Joi from '@hapi/joi';

export default Joi.objectId = require('joi-objectid')(Joi);

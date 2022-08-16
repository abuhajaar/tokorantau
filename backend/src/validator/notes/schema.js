/* eslint-disable linebreak-style */
const Joi = require('joi');

const NotePayloadSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.integer().required(),
  category: Joi.array().items(Joi.string()).required(),
});

module.exports = { NotePayloadSchema };

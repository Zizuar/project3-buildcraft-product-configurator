const Joi = require("joi");
const mongoose = require("mongoose");
const { genreSchema } = require("./genre");

const Quote = mongoose.model(
  "Quote",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255
    },
    genre: {
      type: genreSchema,
      required: true
    },
    numberInStock: {
      type: Number,
      required: true,
      min: 0,
      max: 255
    },
    productAggCost: {
      type: Number,
      required: true,
      min: 0,
      max: 255999
    }
  })
);

function validateQuote(quote) {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(50)
      .required(),
    genreId: Joi.objectId().required(),
    numberInStock: Joi.number()
      .min(0)
      .required(),
    productAggCost: Joi.number()
      .min(0)
      .required()
  };

  return Joi.validate(quote, schema);
}

exports.Quote = Quote;
exports.validate = validateQuote;

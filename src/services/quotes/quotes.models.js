// import mongoose, { Schema } from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuotesSchema = new Schema(
  {
    uuid: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    quote: { type: String, required: true },
    author: { type: String, required: true },
    href: { type: String }
  },
  {
    timestamps: true, // Will automatically create and update updatedAt and createdAt Fields
  });

module.exports = function(app) {
  return mongoose.model('quotes', QuotesSchema);
}
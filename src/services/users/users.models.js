// import mongoose, { Schema } from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema(
  {
    uuid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    usernames: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    highscores: [
      {
        quote: { type: String },
        wpm: { type: Number },
        gameId: { type: String }
      }
    ]
  },
  {
    timestamps: true, // Will automatically create and update updatedAt and createdAt Fields
  });

module.exports = function(app) {
  return mongoose.model('users', UsersSchema);
}
// import mongoose, { Schema } from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HighscoresSchema = new Schema(
  {
    uuid: { type: String, required: true, unique: true },
    gameId: { type: String, required: true },
    playerName: { type: String, required: true },
    wpm: { type: Number, required: true },
    quote: { type: String, required: true },
  },
  {
    timestamps: true, // Will automatically create and update updatedAt and createdAt Fields
  });

module.exports = function(app) {
  return mongoose.model('highscores', HighscoresSchema);
}
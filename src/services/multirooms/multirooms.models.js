// import mongoose, { Schema } from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MultiroomsSchema = new Schema(
  {
    uuid: { type: String, required: true, unique: true },
    gameId: { type: String, required: true, unique: true },
    countdownTime: { type: Number },
    gameStarted: { type: Boolean },
    playerList: [
      {
        playerId: { type: String, required: true },
        gameCreator: { type: Boolean, required: true },
        wpm: { type: Number },
        completed: { type: Boolean, required: true }
      }
    ],
    quoteData: {
      title: { type: String},
      author: { type: String},
      quote: { type: String},
      href: { type: String}
    },
    winner: { type: String },
    completed: { type: Date, expires: 150, default: Date.now }
  },
  {
    timestamps: true, // Will automatically create and update updatedAt and createdAt Fields
  });

module.exports = function(app) {
  return mongoose.model('multirooms', MultiroomsSchema);
}
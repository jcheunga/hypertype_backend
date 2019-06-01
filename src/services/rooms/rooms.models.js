// import mongoose, { Schema } from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomsSchema = new Schema(
  {
    uuid: { type: String, required: true, unique: true },
    gameId: { type: String, required: true, unique: true },
    completedGame: { type: Boolean, required: true },
    gameStartTime: { type: Number, required: true },
    gameEndTime: { type: Number, required: true },
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
  return mongoose.model('rooms', RoomsSchema);
}
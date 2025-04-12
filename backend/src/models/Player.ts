import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
  playerId: Number,
  name: String,
  firstname: String,
  lastname: String,
  age: Number,
  nationality: String,
  height: String,
  weight: String,
  photo: String,
  birth: {
    date: String,
    place: String,
    country: String,
  },
});

export const Player = mongoose.model('Player', PlayerSchema);

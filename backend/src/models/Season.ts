import mongoose from 'mongoose';

const SeasonSchema = new mongoose.Schema({
  year: Number,
  start: String,
  end: String,
  current: Boolean,
});

export const Season = mongoose.model('Season', SeasonSchema);

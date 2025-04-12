import mongoose from 'mongoose';

const LeagueSchema = new mongoose.Schema({
  id: Number,
  name: String,
  type: String,
  logo: String,
  country: {
    name: String,
    code: String,
    flag: String,
  },
  seasons: [
    {
      year: Number,
      start: String,
      end: String,
      current: Boolean,
      coverage: mongoose.Schema.Types.Mixed,
    }
  ]
});

export const League = mongoose.model('League', LeagueSchema);

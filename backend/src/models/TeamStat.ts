import mongoose from 'mongoose';

const teamStatSchema = new mongoose.Schema({
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  league: { type: mongoose.Schema.Types.ObjectId, ref: 'League', required: true },
  season: { type: mongoose.Schema.Types.ObjectId, ref: 'Season', required: true },

  form: String,
  goals: Number,
  fixtures: {
    played: {
      home: Number,
      away: Number,
      total: Number,
    },
    wins: {
      home: Number,
      away: Number,
      total: Number,
    },
    draws: {
      home: Number,
      away: Number,
      total: Number,
    },
    loses: {
      home: Number,
      away: Number,
      total: Number,
    },
  },
}, { timestamps: true });

export const TeamStat = mongoose.model('TeamStat', teamStatSchema);

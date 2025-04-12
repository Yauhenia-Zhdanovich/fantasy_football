import mongoose from 'mongoose';

const playerStatSchema = new mongoose.Schema({
  player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  league: { type: mongoose.Schema.Types.ObjectId, ref: 'League', required: true },
  season: { type: mongoose.Schema.Types.ObjectId, ref: 'Season', required: true },

  games: {
    appearences: Number,
    position: String,
    rating: Number,
    captain: Boolean
  },
  goals: {
    total: Number,
    conceded: Number,
    assists: Number,
    saves: Number
  },
  passes: {
    total: Number,
    key: Number
  },
  cards: {
    yellow: Number,
    yellowred: Number,
    red: Number
  },
  penalty: {
    won: Number,
    commited: Number,
    scored: Number,
    missed: Number,
    saved: Number
  },
  duels: {
    total: Number,
    won: Number
  }
});

export const PlayerStat = mongoose.model('PlayerStat', playerStatSchema);


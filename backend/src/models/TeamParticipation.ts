// models/TeamParticipation.ts
import mongoose from 'mongoose';

const participationSchema = new mongoose.Schema({
  season: { type: mongoose.Schema.Types.ObjectId, ref: 'Season' },
  league: { type: mongoose.Schema.Types.ObjectId, ref: 'League' },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
}, { timestamps: true });

export const TeamParticipation = mongoose.model('TeamParticipation', participationSchema);

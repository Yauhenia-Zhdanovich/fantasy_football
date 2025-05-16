import mongoose, { Schema, Document } from 'mongoose';

export interface IFantasyTeam extends Document {
  name: string;
  country: string;
  competition: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  lineup: {
    name: string;
    formation: {
      gk: number;
      def: number;
      mid: number;
      fwd: number;
    };
  };
  players: mongoose.Types.ObjectId[];
  createdAt: Date;
}

const FantasyTeamSchema = new Schema<IFantasyTeam>({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  country: { type: String, required: true },
  competition: { type: Schema.Types.ObjectId, ref: 'League', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  lineup: {
    name: { type: String, required: true },
    formation: {
      gk: { type: Number, required: true },
      def: { type: Number, required: true },
      mid: { type: Number, required: true },
      fwd: { type: Number, required: true },
    }
  },
  players: [{ type: Schema.Types.ObjectId, ref: 'Player', required: true }],
  createdAt: { type: Date, default: Date.now },
});

export const FantasyTeam = mongoose.model<IFantasyTeam>('FantasyTeam', FantasyTeamSchema);

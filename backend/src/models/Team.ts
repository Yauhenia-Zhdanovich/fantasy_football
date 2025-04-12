import mongoose from 'mongoose';

const VenueSchema = new mongoose.Schema({
  id: Number,
  name: String,
  address: String,
  city: String,
  capacity: Number,
  surface: String,
  image: String,
});

const TeamSchema = new mongoose.Schema({
  id: Number,
  name: String,
  code: String,
  country: String,
  founded: Number,
  national: Boolean,
  logo: String,
  venue: VenueSchema,
});

export const Team = mongoose.model('Team', TeamSchema);

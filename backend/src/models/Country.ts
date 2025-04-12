import mongoose from 'mongoose';

const CountrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  flag: { type: String }
});

export const Country = mongoose.model('Country', CountrySchema);
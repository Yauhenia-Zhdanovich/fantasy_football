import mongoose from 'mongoose';
import { config } from 'dotenv';
import { Country } from '../models/Country.ts';
import fs from 'fs';

config();

export const seedCountries = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('Connected to MongoDB');

    const raw = fs.readFileSync('src/seed/countries.json', 'utf-8');
    const data = JSON.parse(raw);
    console.log(data)
    if (!Array.isArray(data.response)) throw new Error('Invalid format: response must be an array');

    await Country.deleteMany({});
    await Country.insertMany(data.response);
    console.log(`Seeded ${data.response.length} countries`);

    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedCountries();

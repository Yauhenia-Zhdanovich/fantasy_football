import mongoose from 'mongoose';
import { config } from 'dotenv';
import { Country } from '../models/Country.ts';
import { Team } from '../models/Team.ts';
import fs from 'fs';

config();

export const seedCountries = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('Connected to MongoDB');

    const rawCountries = fs.readFileSync('src/seed/countries.json', 'utf-8');
    const countriesData = JSON.parse(rawCountries);
    if (!Array.isArray(countriesData.response)) throw new Error('Invalid format: response must be an array');
    await Country.deleteMany({});
    await Country.insertMany(countriesData.response);
    console.log(`Seeded ${countriesData.response.length} countries`);

    const rawTeams = fs.readFileSync('src/seed/teams_premier_league_2023.json', 'utf-8');
    const teamsData = JSON.parse(rawTeams);
    if (!Array.isArray(teamsData.response)) throw new Error('Invalid format: response must be an array for teams');
    await Team.deleteMany({});
    await Team.insertMany(teamsData.response);
    console.log(`Seeded ${teamsData.response.length} teams`);

    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedCountries();

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { seedCountries } from './seedCountries.ts';
import { seedLeagues } from './seedLeagues.ts';
import { seedTeamParticipation } from './seedTeamParticipation.ts';
import { seedTeamStats } from './seedTeamStats.ts';
import { seedTeams } from './seedTeams.ts';
import { seedSeasons } from './seedSeasons.ts';
import { seedPlayers } from './seedPlayers.ts';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fantasy-football';

const runSeed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    await seedCountries();
    await seedLeagues();
    await seedSeasons();
    await seedTeams();
    await seedTeamParticipation();
    await seedTeamStats();
    await seedPlayers();

    console.log('🌱 All data seeded!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding data:', err);
    process.exit(1);
  }
};

runSeed();

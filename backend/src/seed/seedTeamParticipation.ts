// seed/seedTeamParticipation.ts
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import { Team } from '../models/Team.ts';
import { League } from '../models/League.ts';
import { Season } from '../models/Season.ts';
import { TeamParticipation } from '../models/TeamParticipation.ts';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const seedTeamParticipation = async () => {
  const dirPath = path.join(__dirname, 'teams');
  const files = fs.readdirSync(dirPath).filter(name => name.endsWith('.json'));

  let totalLinked = 0;

  for (const file of files) {
    const raw = fs.readFileSync(path.join(dirPath, file), 'utf-8');
    const parsed = JSON.parse(raw);

    const country = parsed.parameters?.country;
    const year = parsed.parameters?.season;
    const leagueId = Number(parsed.parameters?.league);

    if (!country || !year || !leagueId) {
      console.warn(`⚠️ Missing parameters in file: ${file}`);
      continue;
    }

    const league = await League.findOne({ id: leagueId });
    const season = await Season.findOne({ year });

    if (!league || !season) {
      console.warn(`❌ Skipping: league or season not found for ${file}`);
      continue;
    }

    for (const entry of parsed.response) {
      const teamId = entry.team?.id;
      const team = await Team.findOne({ id: teamId }); // ✅ FIXED HERE

      if (!team) {
        console.warn(`⚠️ Team not found for ID ${teamId} in ${file}`);
        continue;
      }

      const alreadyExists = await TeamParticipation.exists({
        league: league._id,
        season: season._id,
        team: team._id,
      });

      if (!alreadyExists) {
        await TeamParticipation.create({
          league: league._id,
          season: season._id,
          team: team._id,
        });
        console.log(`✔ Linked ${team.name} → ${league.name} (${year})`);
        totalLinked++;
      }
    }
  }

  console.log(`✅ Done seeding team participation. Total: ${totalLinked}`);
};
